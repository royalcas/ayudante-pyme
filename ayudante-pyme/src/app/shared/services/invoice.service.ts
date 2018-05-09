import { Invoice } from './../model/invoice.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private afs: AngularFirestore) { }

  getAll(tenant: string): Observable<Invoice[]> {
    return this.afs.collection<Invoice>(`${tenant}-invoices`).valueChanges();
  }

  add(tenant: string, invoice: Invoice): Observable<any> {
    return from(this.afs.collection<Invoice>(`${tenant}-invoices`).add({ ...invoice }));
  }
}
