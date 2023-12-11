import { ComponentFixture, TestBed,async  } from '@angular/core/testing';
import { DetalleqrPage } from './detalleqr.page';

describe('DetalleqrPage', () => {
  let component: DetalleqrPage;
  let fixture: ComponentFixture<DetalleqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
