import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';
@Component({
  selector: 'app-new-item-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './new-item-button.component.html',
  styleUrl: './new-item-button.component.css',
})
export class NewItemButtonComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(NewItemFormComponent);
  }
}
