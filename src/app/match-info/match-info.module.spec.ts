import { MatchInfoModule } from './match-info.module';

describe('MatchInfoModule', () => {
  let matchInfoModule: MatchInfoModule;

  beforeEach(() => {
    matchInfoModule = new MatchInfoModule();
  });

  it('should create an instance', () => {
    expect(matchInfoModule).toBeTruthy();
  });
});
