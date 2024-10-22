export interface ContentItem {
    id: number;
    order: number;
    type: string;
    value: string;
    tags?: string[];
    note?: string;
}