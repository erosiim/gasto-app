import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatPaginatorModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'item',
    'typeOfItem',
    'quantityOfItem',
    'itemPrice',
    'totalPriceForItem',
  ];
  dataSource = new MatTableDataSource<itemRecord>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
  }
}

export interface itemRecord {
  position: number;
  itemName: string;
  typeOfItem: string; //*Consider change this name for itemPresentation..
  quantityOfItem: number;
  itemPrice: number;
  totalPriceForItem: number;
}

const ELEMENT_DATA: itemRecord[] = [
  { position: 1, itemName : 'azucar', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 2, itemName : 'arroz', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 3, itemName : 'frijol', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 4, itemName : 'aceite', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 5, itemName : 'jabón', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 6, itemName : 'jabon de mano', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 7, itemName : 'servitoallas', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25},
  { position: 8, itemName : 'espatula', typeOfItem: 'u', quantityOfItem: 1, itemPrice:25, totalPriceForItem:25}
];
