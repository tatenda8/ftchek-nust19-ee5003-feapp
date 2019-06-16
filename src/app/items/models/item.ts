import { AttributeValues } from './attribute-values';

import { ItemType } from './item-type';

export interface Item {
    id: number;
    dateCreated: number;
    dateLastUpdated: number;
    version?: any;
    attributeValues: AttributeValues;
    itemType: ItemType;
  }