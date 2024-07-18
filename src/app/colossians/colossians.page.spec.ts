import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColossiansPage } from './colossians.page';

describe('ColossiansPage', () => {
  let component: ColossiansPage;
  let fixture: ComponentFixture<ColossiansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColossiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
