import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchBarComponent } from './match-bar.component';

describe('MatchComponent', () => {
  let component: MatchBarComponent;
  let fixture: ComponentFixture<MatchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
