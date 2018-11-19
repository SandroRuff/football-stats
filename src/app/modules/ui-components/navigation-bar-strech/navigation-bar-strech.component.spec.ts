import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarStrechComponent } from './navigation-bar-strech.component';

describe('NavigationBarStrechComponent', () => {
  let component: NavigationBarStrechComponent;
  let fixture: ComponentFixture<NavigationBarStrechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationBarStrechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarStrechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
