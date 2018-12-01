import { Player } from './player';
import { Area } from './area';

export interface Team {
  activeCompetitions: [{
    area: Area,
    id: number,
    lastUpdated: string,
    name: string,
    plan: string
  }];
  address: string;
  area: Area;
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  name: string;
  phone: string;
  shortName: string;
  squad: Player[];
  tla: string;
  venue: string;
  website: string;
}
