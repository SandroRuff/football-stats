import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBarComponent } from './section-bar.component';

describe('SectionBarComponent', () => {
  let component: SectionBarComponent;
  let fixture: ComponentFixture<SectionBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
