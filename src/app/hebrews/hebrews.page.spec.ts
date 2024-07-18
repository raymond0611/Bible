import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HebrewsPage } from './hebrews.page';

describe('HebrewsPage', () => {
  let component: HebrewsPage;
  let fixture: ComponentFixture<HebrewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HebrewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
