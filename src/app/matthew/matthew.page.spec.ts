import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatthewPage } from './matthew.page';

describe('MatthewPage', () => {
  let component: MatthewPage;
  let fixture: ComponentFixture<MatthewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatthewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
