import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CostoTotalComponent } from '../../shared/ui/costo-total/costo-total.component';
@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [MatGridListModule, CostoTotalComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css',
})
export class GastosComponent {}
