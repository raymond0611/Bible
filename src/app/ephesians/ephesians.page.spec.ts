import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EphesiansPage } from './ephesians.page';

describe('EphesiansPage', () => {
  let component: EphesiansPage;
  let fixture: ComponentFixture<EphesiansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EphesiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
