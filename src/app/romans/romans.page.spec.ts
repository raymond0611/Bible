import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RomansPage } from './romans.page';

describe('RomansPage', () => {
  let component: RomansPage;
  let fixture: ComponentFixture<RomansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RomansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
