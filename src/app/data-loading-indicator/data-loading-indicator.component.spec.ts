import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLoadingIndicatorComponent } from './data-loading-indicator.component';

describe('DataLoadingIndicatorComponent', () => {
  let component: DataLoadingIndicatorComponent;
  let fixture: ComponentFixture<DataLoadingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLoadingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
