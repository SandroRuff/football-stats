export interface TeamDescription {
  country: string;
  shortName: {
    name: string;
    tla: string;
  };
  founded: number;
  activeCompetitions: object[];
  address: string;
  stadium: string;
  website: string;
  email: string;
}
