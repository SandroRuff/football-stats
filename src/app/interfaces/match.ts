import { Player } from './player';

export interface Match {
  id: number;
  homeTeam: {
    id: number;
    name: string;
  };
  awayTeam: {
    id: number;
    name: string;
  };
  competition: {
    id: number,
    name: string
  };
  season: {
    id: number,
    startDate: string,
    endDate: string,
    currentMatchday: number,
    availableStages: string[]
  };
  score: {
    duration: string;
    extraTime: {
      homeTeam: number;
      awayTeam: number;
    };
    fullTime: {
      homeTeam: number;
      awayTeam: number;
    };
    halfTime: {
      homeTeam: number;
      awayTeam: number;
    };
    penalties: {
      homeTeam: number;
      awayTeam: number;
    };
    winner: string;
  };
  utcDate: string;
  commonStatus: string;
  status: string;
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
