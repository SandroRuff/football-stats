import { MatchdayModule } from './matchday.module';

describe('MatchdayModule', () => {
  let matchdayModule: MatchdayModule;

  beforeEach(() => {
    matchdayModule = new MatchdayModule();
  });

  it('should create an instance', () => {
    expect(matchdayModule).toBeTruthy();
  });
});
