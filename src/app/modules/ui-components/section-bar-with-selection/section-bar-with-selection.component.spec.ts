import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBarWithSelectionComponent } from './section-bar-with-selection.component';

describe('SectionBarWithSelectionComponent', () => {
  let component: SectionBarWithSelectionComponent;
  let fixture: ComponentFixture<SectionBarWithSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBarWithSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBarWithSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
