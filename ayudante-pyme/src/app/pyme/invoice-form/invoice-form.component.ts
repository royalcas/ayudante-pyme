import { Invoice } from './../../shared/model/invoice.model';
import { InvoiceService } from './../../shared/services/invoice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pyme-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent {
  invoice: Invoice = new Invoice(new Date(), null, null, null, null, null, null, null);
  constructor(private invoiceService: InvoiceService) {
  }

  saveInvoice(): void {
    this.invoiceService.add('hood', this.invoice);
  }
}
