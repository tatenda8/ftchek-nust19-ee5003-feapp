import { Group } from './group';
import { Station } from './station';
import { Authority } from './authority';

export interface User {
  id: number;
  dateCreated: number;
  dateLastUpdated: number;
  version?: any;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: string;
  group: Group;
  active: boolean;
  station?: Station;
  enabled: boolean;
  authorities: Authority[];
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
}
