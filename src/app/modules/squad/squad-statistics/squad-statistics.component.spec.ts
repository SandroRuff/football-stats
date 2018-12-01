import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadStatisticsComponent } from './squad-statistics.component';

describe('SquadStatisticsComponent', () => {
  let component: SquadStatisticsComponent;
  let fixture: ComponentFixture<SquadStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
