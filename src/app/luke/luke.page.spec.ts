import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LukePage } from './luke.page';

describe('LukePage', () => {
  let component: LukePage;
  let fixture: ComponentFixture<LukePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LukePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
