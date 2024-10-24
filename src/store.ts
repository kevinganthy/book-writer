import { readonly, writable, get } from 'svelte/store';
import type { Book } from './types/Book';
import type { Insights } from './types/Insights';
import type { ContentItem } from './types/ContentItem';

let timeoutId: number;
const timeout = 750;

const wTitle = writable<string>('');
const wInsights = writable<Insights>();
const wIsBook = writable<boolean>(false);
const wBook = writable<Book>();
const wContent = writable<ContentItem[]>();
const wSaveStatus = writable<number>(0);

export const focusMode = writable<boolean>(false);
export const book = readonly(wBook);
export const isBook = readonly(wIsBook);
export const title = readonly(wTitle);
export const insights = readonly(wInsights);
export const content = readonly(wContent);
export const saveStatus = readonly(wSaveStatus);


export const restoreBook = async () => {
    if ('caches' in window) {
        const cache = await caches.open('json-cache');
        const cachedResponse = await cache.match(`/book.json`);
        if (cachedResponse) {
            const data = await cachedResponse.json();
            wBook.set(data as Book);
        }
    }
};

const sendToCache = async (value: Book) => {
    if ('caches' in window) {
        const cache = await caches.open('json-cache');
        const blob = new Blob([JSON.stringify(value)], { type: 'application/json' });
        const response = new Response(blob, { headers: { 'Content-Type': 'application/json' } });
        const fakeRequest = new Request(`/book.json`);
        await cache.put(fakeRequest, response);
        wSaveStatus.set(1);
    }
    else {
        wSaveStatus.set(-1);
    }

    setTimeout(() => {
        wSaveStatus.set(0);
    }, 1500);
}



export const onUploadBook = async (value: Book) => {
    wBook.set(value);
    sendToCache(value);
};

const saveBook = () => {
    const newBook: Book = {
        "title": get(title),
        "insights": {
            "days": get(wBook).insights.days,
        },
        "content": get(content),
    };
    wBook.set(newBook);
    sendToCache(newBook);
}

export const downloadBook = () => {
    const filename = `${get(wTitle).toLowerCase().replace(/ /g, '-')}_${(new Date()).toJSON()}.json`;
    const json = JSON.stringify(get(wBook), null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', filename)
    a.click()
};



export const setValue = (key: string, value: any, id?: number) => {
    const clean = (content: ContentItem[]) => {
        return content.filter( c => {
            if ( c.type === "bloc" && !c.value && !c.note && !c.tags?.length ) {
                return null;
            }
            else if ( c.type === "chapter" && !c.value  ) {
                return null;
            }
            return c;
        })
    };

    switch (key) {
        case 'title':
            wTitle.set(value);
            break;
        case 'content.value':
            wContent.update(content => {
                const index = content.findIndex(c => c.id === id);
                content[index].value = value.replace(/<br>/g, '\n');
                return clean(content);
            });
            break;
        case 'content.note':
            wContent.update(content => {
                const index = content.findIndex(c => c.id === id);
                content[index].note = value.replace(/<br>/g, '\n');
                return clean(content);
            });
            break;
        case 'content.tags':
            wContent.update(content => {
                const index = content.findIndex(c => c.id === id);
                content[index].tags = value;
                return clean(content);
            });
            break;
    }

    // Save only after seconds of inactivity
    if ( timeoutId ) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        saveBook();
        timeoutId = 0;
    }, timeout);
};

export const addContentItem = (item: ContentItem) => {
    wContent.update(content => {
        content.push(item);
        return content;
    });
    saveBook();
};



const getConsecutiveDays = (days: string[]) => {
    const dates: number[] = days.map(day => (new Date(day)).getTime())
        .sort((a, b) => a + b);

    let count = 1;
    for (let index = 0; index < dates.length; index++) {
        const delta = dates[index] - dates[index+1];
        if (delta > 1000 * 60 *60 * 24) {
            break;
        }
        count++;
    }
    return count;
};





wBook.subscribe(value => {
    if ( !value ) return;

    wIsBook.set(true);
    wTitle.set(value.title);
    wInsights.set({
        words: value.content
                    .map(c => c.value.split(' ').length)
                    .reduce((a, b) => a + b, 0),
        today: 0,
        days: value.insights.days.length,
        chain: getConsecutiveDays(value.insights.days),
    });
    wContent.set(
        value.content
            .sort((a, b) => a.order - b.order)
            .map((c, index) => {
                c.order = index + 1;
                return c;
            })
    );
});
