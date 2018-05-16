import { StockService } from './../../shared/services/stock.service';
import { Product } from './../../shared/model/product.model';
import { PersonService } from './../../shared/services/person.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Invoice, InvoiceItem } from './../../shared/model/invoice.model';
import { InvoiceService } from './../../shared/services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, mergeMap, tap, filter } from 'rxjs/operators';
import { Person } from '../../shared/model/person.model';
import { Money } from '../../shared/model/money.model';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-pyme-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = Invoice.default();

  customers: Person[] = [];
  filteredCustomers: Person[] = [];

  sellers: Person[] = [];
  filteredSellers: Person[] = [];

  products: Product[] = [];

  customerFormControl = new FormControl();

  customerLookupSubscription: Subscription;

  constructor(
    private invoiceService: InvoiceService,
    private personService: PersonService,
    private stockService: StockService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  private getProducts(): void {
    this.stockService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  private fetchById(id: string): void {
    this.invoiceService.findById(id).subscribe((invoice: Invoice) => {
      this.invoice = invoice;
    });
  }

  ngOnInit(): void {
    this.addItemToCart(null);
    this.getProducts();
    this.route.paramMap.subscribe((arg: ParamMap) => {
        this.fetchById(arg.get('id'));
      });
    this.personService.getCustomers().subscribe((customers: Person[]) => {
      this.customers = customers;
      this.filteredCustomers = customers.slice();
    });

    this.personService.getCustomers().subscribe((customers: Person[]) => {
      this.customers = customers;
      this.filteredCustomers = customers.slice();
    });
    this.customerLookupSubscription = this.customerFormControl.valueChanges.pipe(
      debounceTime(500),
      filter((customerLookingForText: any) => typeof(customerLookingForText) === 'string'),
      mergeMap((customerLookingForText) => {
        return this.personService.lookupPersonInList(customerLookingForText, this.customers);
      })
    ).subscribe((filtered: Person[]) => {
      this.filteredCustomers = filtered;
    });
  }

  cancel(): void {
    this.router.navigate(['/pyme']);
  }

  save(): void {
    this.invoiceService.add(this.invoice).subscribe((data: any) => {
      this.router.navigate(['/pyme']);
    });
  }

  selectCartItem(event: any, item: InvoiceItem): void {
    const product: Product = event.value as Product;
    item.valuePerUnit = product.valuePerUnit;
    item.itemId = product.id;
    item.quantity = 1;
    item.name = product.name;
  }

  customerSelected(event: MatAutocompleteSelectedEvent): void {
    const selectedCustomer = event.option.value as Person;
    this.invoice.customer = selectedCustomer;
    this.invoice.customerId = selectedCustomer.id;
  }

  clearCustomer(): void {
    this.invoice.customer = null;
    this.customerFormControl.setValue('');
  }

  addItemToCart(event: any): void {
    this.invoice.items.push(InvoiceItem.default());
  }

  removeFromCartItem(itemIndex: number): void {
    this.invoice.items.splice(itemIndex, 1);
  }
}
