import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JohnPage } from './john.page';

describe('JohnPage', () => {
  let component: JohnPage;
  let fixture: ComponentFixture<JohnPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JohnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
