import type { ContentItem } from "./ContentItem";

export interface Book {
    title: string;
    insights: {
        days: string[]
    }
    content: ContentItem[]
}