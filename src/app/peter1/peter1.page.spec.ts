import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Peter1Page } from './peter1.page';

describe('Peter1Page', () => {
  let component: Peter1Page;
  let fixture: ComponentFixture<Peter1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Peter1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
