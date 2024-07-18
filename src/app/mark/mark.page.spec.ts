import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkPage } from './mark.page';

describe('MarkPage', () => {
  let component: MarkPage;
  let fixture: ComponentFixture<MarkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
