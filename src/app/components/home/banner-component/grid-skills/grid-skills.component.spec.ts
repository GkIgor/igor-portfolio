import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSkillsComponent } from './grid-skills.component';

describe('GridSkillsComponent', () => {
  let component: GridSkillsComponent;
  let fixture: ComponentFixture<GridSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridSkillsComponent]
    });
    fixture = TestBed.createComponent(GridSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
