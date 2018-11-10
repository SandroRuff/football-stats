import { TeamInfoModule } from './team-info.module';

describe('TeamInfoModule', () => {
  let teamInfoModule: TeamInfoModule;

  beforeEach(() => {
    teamInfoModule = new TeamInfoModule();
  });

  it('should create an instance', () => {
    expect(teamInfoModule).toBeTruthy();
  });
});
