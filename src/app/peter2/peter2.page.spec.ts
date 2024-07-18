import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Peter2Page } from './peter2.page';

describe('Peter2Page', () => {
  let component: Peter2Page;
  let fixture: ComponentFixture<Peter2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Peter2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
