import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Thessalonians1Page } from './thessalonians1.page';

describe('Thessalonians1Page', () => {
  let component: Thessalonians1Page;
  let fixture: ComponentFixture<Thessalonians1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Thessalonians1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
