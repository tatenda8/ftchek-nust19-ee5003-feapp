import { Item } from './item';

export interface LostItem {
    id: number;
    dateCreated: number;
    dateLastUpdated: number;
    version?: any;
    item: Item;
    email: string;
}
