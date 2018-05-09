import { Router } from '@angular/router';
import { Invoice } from './../../shared/model/invoice.model';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../shared/services/invoice.service';

@Component({
  selector: 'app-pyme-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  invoices: Invoice[];
  displayedColumns = ['id', 'date', 'total', 'items'];

  constructor(private invoiceService: InvoiceService, private router: Router) {}

  ngOnInit(): void {
      this.invoiceService.getAll('hood').subscribe((items: Invoice[]) => {
        this.invoices = items;
        console.log(items);
      });
  }

  newInvoice(): void {
    this.router.navigate(['pyme/nueva-factura']);
  }
}
