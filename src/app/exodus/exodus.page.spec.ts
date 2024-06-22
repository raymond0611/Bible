import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExodusPage } from './exodus.page';

describe('ExodusPage', () => {
  let component: ExodusPage;
  let fixture: ComponentFixture<ExodusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
