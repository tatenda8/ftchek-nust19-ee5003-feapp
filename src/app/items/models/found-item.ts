import { Item } from './item';

// import { Station } from 'src/app/users/models/station';
import { Station } from '../../users/models/station';

export interface FoundItem {
    id?: number;
    dateCreated: number;
    dateLastUpdated: number;
    version: any;
    item: Item;
    station: Station;
}
