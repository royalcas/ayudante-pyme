import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { TenantService } from './tenant.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService extends CategoriesService {

  constructor(
    protected tenantService: TenantService,
    protected afs: AngularFirestore
  ) {
    super('product-categories', tenantService, afs);
  }
}
