import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionTitleBarComponent } from './competition-title-bar.component';

describe('CompetitionTitleBarComponent', () => {
  let component: CompetitionTitleBarComponent;
  let fixture: ComponentFixture<CompetitionTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
