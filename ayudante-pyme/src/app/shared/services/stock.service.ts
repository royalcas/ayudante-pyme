import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../model/product.model';
import { Person } from '../model/person.model';
import { Observable, from } from 'rxjs';
import { BaseFirebaseService } from './base-firebase-service.service';
import { TenantService } from './tenant.service';

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseFirebaseService<Product> {

  constructor(tenantService: TenantService, afs: AngularFirestore) {
    super('products', tenantService, afs);
  }
}
