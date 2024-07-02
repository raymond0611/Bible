import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabakkukPage } from './habakkuk.page';

describe('HabakkukPage', () => {
  let component: HabakkukPage;
  let fixture: ComponentFixture<HabakkukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HabakkukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
