import { PlayerInfoModule } from './player-info.module';

describe('PlayerInfoModule', () => {
  let playerInfoModule: PlayerInfoModule;

  beforeEach(() => {
    playerInfoModule = new PlayerInfoModule();
  });

  it('should create an instance', () => {
    expect(playerInfoModule).toBeTruthy();
  });
});
