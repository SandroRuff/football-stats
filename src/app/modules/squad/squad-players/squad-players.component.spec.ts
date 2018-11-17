import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadPlayersComponent } from './squad-players.component';

describe('SquadPlayersComponent', () => {
  let component: SquadPlayersComponent;
  let fixture: ComponentFixture<SquadPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
