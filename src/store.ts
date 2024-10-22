import { readonly, writable } from 'svelte/store';
import type { Book } from './types/Book';
import type { Insights } from './types/Insights';
import type { ContentItem } from './types/ContentItem';

const wTitle = writable<string>('');
const wInsights = writable<Insights>();
const wIsBook = writable<boolean>(false);
const wBook = writable<Book>();
const wContent = writable<ContentItem[]>();

export const book = readonly(wBook);
export const isBook = readonly(wIsBook);
export const title = readonly(wTitle);
export const insights = readonly(wInsights);
export const content = readonly(wContent);


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

export const onUploadBook = async (value: Book) => {
    wBook.set(value);

    if ('caches' in window) {
        const cache = await caches.open('json-cache');
        const blob = new Blob([JSON.stringify(value)], { type: 'application/json' });
        const response = new Response(blob, { headers: { 'Content-Type': 'application/json' } });
        const fakeRequest = new Request(`/book.json`);
        await cache.put(fakeRequest, response);
    }
};

export const setValue = (key: string, value: any, id?: number) => {
    switch (key) {
        case 'title':
            wTitle.set(value);
            break;
        case 'content.value':
            wContent.update(content => {
                const index = content.findIndex(c => c.id === id);
                content[index].value = value;
                return content;
            });
            break;
        case 'content.note':
            wContent.update(content => {
                const index = content.findIndex(c => c.id === id);
                content[index].note = value;
                return content;
            });
            break;
    }
};

wTitle.subscribe(value => {
    console.log('title', value);
});
wContent.subscribe(value => {
    console.log('content', value);
});


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
    wContent.set(value.content.sort((a, b) => a.order - b.order));
});




