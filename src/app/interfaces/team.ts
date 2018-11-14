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
  adress: string;
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
  squad: [{
    countryOfBirth: string,
    dateOfBirth: string,
    id: number,
    name: string,
    nationality: string,
    position: string,
    role: string,
    shirtNumber: number
  }];
  tla: string;
  venue: string;
  website: string;
}
