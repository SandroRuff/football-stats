import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSetComponent } from './league-set.component';

describe('LeagueSetComponent', () => {
  let component: LeagueSetComponent;
  let fixture: ComponentFixture<LeagueSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
