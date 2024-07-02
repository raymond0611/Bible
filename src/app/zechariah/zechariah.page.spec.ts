import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZechariahPage } from './zechariah.page';

describe('ZechariahPage', () => {
  let component: ZechariahPage;
  let fixture: ComponentFixture<ZechariahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZechariahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
