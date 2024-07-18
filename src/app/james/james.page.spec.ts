import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JamesPage } from './james.page';

describe('JamesPage', () => {
  let component: JamesPage;
  let fixture: ComponentFixture<JamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
