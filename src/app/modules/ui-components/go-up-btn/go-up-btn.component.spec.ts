import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoUpBtnComponent } from './go-up-btn.component';

describe('GoUpBtnComponent', () => {
  let component: GoUpBtnComponent;
  let fixture: ComponentFixture<GoUpBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoUpBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoUpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
