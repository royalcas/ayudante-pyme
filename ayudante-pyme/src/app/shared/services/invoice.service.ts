import { TenantService } from './tenant.service';
import { Invoice } from './../model/invoice.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { BaseFirebaseService } from './base-firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseFirebaseService<Invoice> {
  constructor(tenantService: TenantService, afs: AngularFirestore) {
    super('invoices', tenantService, afs);
  }

  mapFromResponse(rawData: any): Invoice {
    return Invoice.fromJSON(rawData);
  }
}
