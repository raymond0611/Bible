import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HaggaiPage } from './haggai.page';

describe('HaggaiPage', () => {
  let component: HaggaiPage;
  let fixture: ComponentFixture<HaggaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HaggaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
