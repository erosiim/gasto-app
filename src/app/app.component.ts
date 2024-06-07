import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GastosComponent } from './features/gastos/gastos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GastosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-gasto-app';
}
