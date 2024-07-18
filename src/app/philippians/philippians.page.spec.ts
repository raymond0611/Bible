import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhilippiansPage } from './philippians.page';

describe('PhilippiansPage', () => {
  let component: PhilippiansPage;
  let fixture: ComponentFixture<PhilippiansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilippiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
