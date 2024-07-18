import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhilemonPage } from './philemon.page';

describe('PhilemonPage', () => {
  let component: PhilemonPage;
  let fixture: ComponentFixture<PhilemonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
