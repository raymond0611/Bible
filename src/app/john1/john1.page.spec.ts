import { ComponentFixture, TestBed } from '@angular/core/testing';
import { John1Page } from './john1.page';

describe('John1Page', () => {
  let component: John1Page;
  let fixture: ComponentFixture<John1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(John1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
