import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-new-item-form',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-item-form.component.html',
  styleUrl: './new-item-form.component.css',
})
export class NewItemFormComponent {
  
  itemForm = new FormGroup({
    itemName : new FormControl(''),
    typeOfItem : new FormControl(''),
    quantityOfItem : new FormControl(0),
    itemPrice : new FormControl(0.0),
    totalPriceForItem : new FormControl(0)
  })
  constructor (){}
  
  showItem(){
    console.log(this.itemForm.value)
  }

  getTotalForItem(){
    const totalPriceForItem = this.itemForm.value.itemPrice!  * this.itemForm.value.quantityOfItem! 
    this.itemForm.patchValue({
      totalPriceForItem: totalPriceForItem
    })
    console.log(totalPriceForItem)
  }



}
