import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerArticleComponent } from './player-article.component';

describe('PlayerComponent', () => {
  let component: PlayerArticleComponent;
  let fixture: ComponentFixture<PlayerArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerArticleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
