import { Player } from './player';

export interface Match {
  id: number;
  competition: {
    id: number,
    name: string
  };
  season: {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number,
    availableStages: [string]
  };
  utcDate: string;
  commonStatus: string;
  status: string;
  minute: string;
  attendance: number;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: string;
  referees: [{
    id: number,
    name: string,
    nationality: string
  }];
  squad: Player[];
}
