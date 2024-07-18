import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitusPage } from './titus.page';

describe('TitusPage', () => {
  let component: TitusPage;
  let fixture: ComponentFixture<TitusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TitusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
