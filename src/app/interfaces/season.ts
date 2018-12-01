import { Team } from './team';

export interface Season {
  currentMatchday: number;
  endDate: string;
  id: number;
  startDate: string;
  winner: Team;
}
