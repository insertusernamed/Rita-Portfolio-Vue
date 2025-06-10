export interface MediaItem {
    type: string;
    url: string;
    caption: string;
}

export interface Certification {
    id: string | number;
    name: string;
    media: MediaItem[];
}