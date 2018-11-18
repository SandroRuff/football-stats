import { Player } from './player';

export interface Team {
  activeCompetitions: [{
    area: {
      id: number,
      name: string
    },
    id: number,
    lastUpdated: string,
    name: string,
    plan: string
  }];
  address: string;
  area: {
    id: number,
    name: string
  };
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  squad: Player[];
  tla: string;
  venue: string;
  website: string;
}
