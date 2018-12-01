import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesSetComponent } from './matches-set.component';

describe('MatchesSetComponent', () => {
  let component: MatchesSetComponent;
  let fixture: ComponentFixture<MatchesSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
