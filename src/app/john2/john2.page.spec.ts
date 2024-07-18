import { ComponentFixture, TestBed } from '@angular/core/testing';
import { John2Page } from './john2.page';

describe('John2Page', () => {
  let component: John2Page;
  let fixture: ComponentFixture<John2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(John2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
