import { ItemAttribute } from './item-attribute';

export interface ItemType {
    id: number;
    dateCreated: number;
    dateLastUpdated: number;
    version?: any;
    name: string;
    itemAttributes: ItemAttribute[];
  }
