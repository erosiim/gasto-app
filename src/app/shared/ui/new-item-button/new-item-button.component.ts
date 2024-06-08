import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-new-item-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './new-item-button.component.html',
  styleUrl: './new-item-button.component.css'
})
export class NewItemButtonComponent {

}
