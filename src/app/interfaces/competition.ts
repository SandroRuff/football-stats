import { Area } from './area';
import { Season } from './season';

export interface Competition {
  area: Area;
  code: string;
  currentSeason: Season;
  id: number;
  name: string;
  seasons: Season[];
}
