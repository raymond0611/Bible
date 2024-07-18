import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorinthiansPage } from './corinthians.page';

describe('CorinthiansPage', () => {
  let component: CorinthiansPage;
  let fixture: ComponentFixture<CorinthiansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorinthiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
