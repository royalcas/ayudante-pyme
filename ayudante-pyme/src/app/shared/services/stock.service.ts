import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../model/product.model';
import { Person } from '../model/person.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private afs: AngularFirestore) { }

  private getCollection(tenant: string): AngularFirestoreCollection<Product> {
    return this.afs.collection<Product>(`${tenant}-products`);
  }

  getAll(tenant: string): Observable<Product[]> {
    return this.getCollection(tenant).valueChanges();
  }

  add(tenant: string, product: Product): Observable<any> {
    return from(this.getCollection(tenant).add({...product}));
  }
}
