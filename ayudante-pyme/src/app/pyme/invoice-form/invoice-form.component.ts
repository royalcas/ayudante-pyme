import { PersonService } from './../../shared/services/person.service';
import { Router } from '@angular/router';
import { Invoice } from './../../shared/model/invoice.model';
import { InvoiceService } from './../../shared/services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, mergeMap, tap } from 'rxjs/operators';
import { Person } from '../../shared/model/person.model';

@Component({
  selector: 'app-pyme-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  invoice: Invoice = Invoice.default();
  customers: Person[] = [];
  filteredCustomers: Person[] = [];
  customerFormControl = new FormControl();

  customerLookupSubscription: Subscription;

  constructor(
    private invoiceService: InvoiceService,
    private personService: PersonService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.personService.getCustomers('hood').subscribe((customers: Person[]) => {
      this.customers = customers;
      this.filteredCustomers = customers.slice();
    });
    this.customerLookupSubscription = this.customerFormControl.valueChanges.pipe(
      debounceTime(1000),
      mergeMap((customerLookingForText) => {
        return this.personService.lookupPersonInList(customerLookingForText, this.customers);
      })
    ).subscribe((filtered: Person[]) => {
      this.filteredCustomers = filtered;
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }

  save(): void {
    this.invoiceService.add('hood', this.invoice).subscribe((data: any) => {
      this.router.navigate(['/']);
    });
  }
}
