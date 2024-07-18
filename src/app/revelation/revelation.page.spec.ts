import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevelationPage } from './revelation.page';

describe('RevelationPage', () => {
  let component: RevelationPage;
  let fixture: ComponentFixture<RevelationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
