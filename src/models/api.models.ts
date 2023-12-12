export interface ApiResponse {
    folders: Folders;
    items:   Items;
}

export interface Folders {
    columns: string[];
    data:    Array<Array<number | null | string>>;
}

export interface Items {
    columns: string[];
    data:    ItemsData[];
}

export interface ItemsData {
    id:    number;
    title: string;
}

export interface Tree<T> {
    id: number;
    title: string;
    children?: Tree<T>[];
}