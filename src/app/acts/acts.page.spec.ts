import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActsPage } from './acts.page';

describe('ActsPage', () => {
  let component: ActsPage;
  let fixture: ComponentFixture<ActsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
