import type { ContentItem } from "./ContentItem";

export interface Insight {
    date: string;
    words: number;
}

export interface Book {
    title: string;
    insights: Insight[]
    content: ContentItem[]
}