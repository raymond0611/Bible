import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Timothy1Page } from './timothy1.page';

describe('Timothy1Page', () => {
  let component: Timothy1Page;
  let fixture: ComponentFixture<Timothy1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Timothy1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
