import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalatiansPage } from './galatians.page';

describe('GalatiansPage', () => {
  let component: GalatiansPage;
  let fixture: ComponentFixture<GalatiansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalatiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
