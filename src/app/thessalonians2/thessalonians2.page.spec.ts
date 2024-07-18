import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Thessalonians2Page } from './thessalonians2.page';

describe('Thessalonians2Page', () => {
  let component: Thessalonians2Page;
  let fixture: ComponentFixture<Thessalonians2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Thessalonians2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
