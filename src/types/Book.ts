import type { ContentItem } from "./ContentItem";

export interface Book {
    title: string;
    insights: {
        words: {
            total: number;
            today: number;
            date: string
        }
        days: string[]
    }
    content: ContentItem[]
}