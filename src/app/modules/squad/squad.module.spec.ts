import { SquadModule } from './squad.module';

describe('SquadModule', () => {
  let squadModule: SquadModule;

  beforeEach(() => {
    squadModule = new SquadModule();
  });

  it('should create an instance', () => {
    expect(squadModule).toBeTruthy();
  });
});
