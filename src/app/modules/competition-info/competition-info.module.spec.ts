import { CompetitionInfoModule } from './competition-info.module';

describe('CompetitionInfoModule', () => {
  let competitionInfoModule: CompetitionInfoModule;

  beforeEach(() => {
    competitionInfoModule = new CompetitionInfoModule();
  });

  it('should create an instance', () => {
    expect(competitionInfoModule).toBeTruthy();
  });
});
