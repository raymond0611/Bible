import { ComponentFixture, TestBed } from '@angular/core/testing';
import { John3Page } from './john3.page';

describe('John3Page', () => {
  let component: John3Page;
  let fixture: ComponentFixture<John3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(John3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
