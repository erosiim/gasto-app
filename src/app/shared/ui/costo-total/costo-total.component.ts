import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-costo-total',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule],
  templateUrl: './costo-total.component.html',
  styleUrl: './costo-total.component.css'
})
export class CostoTotalComponent {

}
