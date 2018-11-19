import { Competition } from './competition';
import { Season } from './season';
import { Standings } from './standings';

export interface StandingsRes {
  competition: Competition;
  season: Season;
  standings: Standings[];
}
