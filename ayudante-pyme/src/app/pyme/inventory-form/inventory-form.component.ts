import { ProductCategoriesService } from './../../shared/services/product-categories.service';
import { Product } from './../../shared/model/product.model';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../../shared/services/stock.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../shared/model/category.model';

@Component({
  selector: 'app-pyme-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.css']
})
export class InventoryFormComponent implements OnInit {
  product: Product = Product.default();
  categories$: Observable<Category[]>;

  constructor(private categoryService: ProductCategoriesService, private stockService: StockService, private router: Router) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getLinearCategories();
  }

  save(): void {
    this.stockService.add(this.product);
    this.router.navigate(['pyme/inventario']);
  }
}
