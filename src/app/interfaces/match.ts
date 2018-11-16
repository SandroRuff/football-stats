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
  homeTeam: {
    id: number,
    name: string,
    coach: {
      id: number,
      name: string,
      countryOfBirth: string,
      nationality: string
    },
    captain: {
      id: number,
      name: string,
      shirtNumber: number
    },
    lineup: [{
      id: number,
      name: string,
      position: string,
      shirtNumber: number
    }],
    bench: [{
      id: number,
      name: string,
      position: string,
      shirtNumber: number
    }]
  };
  awayTeam: {
    id: number,
    name: string,
    coach: {
      id: number,
      name: string,
      countryOfBirth: string,
      nationality: string
    },
    captain: {
      id: number,
      name: string,
      shirtNumber: number
    },
    lineup: [{
      id: number,
      name: string,
      position: string,
      shirtNumber: number
    }],
    bench: [{
      id: number,
      name: string,
      position: string,
      shirtNumber: number
    }]
  };
  score: {
    winner: string,
    duration: string,
    halfTime: {
      homeTeam: number,
      awayTeam: number
    },
    fullTime: {
      homeTeam: number,
      awayTeam: number
    },
    extraTime: {
      homeTeam: number,
      awayTeam: number
    },
    penalties: {
      homeTeam: number,
      awayTeam: number
    }
  };
  goals: [{
    minute: number,
    scorer: {
      id: number,
      name: string
    },
    assist: [{
      id: number,
      name: string
    }]
  }];
  bookings: [{
    minute: number,
    team: {
      id: number,
      name: string
    },
    player: {
      id: number,
      name: string
    },
    card: string
  }];
  substitutions: [{
    minute: number,
    team: {
      id: number,
      name: string
    },
    playerOut: {
      id: number,
      name: string
    },
    playerIn: {
      id: number,
      name: string
    }
  }];
}
