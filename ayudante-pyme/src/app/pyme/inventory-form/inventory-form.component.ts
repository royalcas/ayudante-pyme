import { Product } from './../../shared/model/product.model';
import { Component } from '@angular/core';
import { StockService } from '../../shared/services/stock.service';

@Component({
  selector: 'app-pyme-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent {
  product: Product = Product.default();

  constructor(private stockService: StockService) {
  }

  save(): void {
    this.stockService.add('hood', this.product);
  }
}
