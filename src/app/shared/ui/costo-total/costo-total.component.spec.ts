import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoTotalComponent } from './costo-total.component';

describe('CostoTotalComponent', () => {
  let component: CostoTotalComponent;
  let fixture: ComponentFixture<CostoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostoTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
