import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTablesComponent } from './team-tables.component';

describe('TeamTablesComponent', () => {
  let component: TeamTablesComponent;
  let fixture: ComponentFixture<TeamTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
