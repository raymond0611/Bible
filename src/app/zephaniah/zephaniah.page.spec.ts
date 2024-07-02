import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZephaniahPage } from './zephaniah.page';

describe('ZephaniahPage', () => {
  let component: ZephaniahPage;
  let fixture: ComponentFixture<ZephaniahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZephaniahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
