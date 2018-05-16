import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { TenantService } from './tenant.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeCategoriesService extends CategoriesService {

  constructor(
    protected tenantService: TenantService,
    protected afs: AngularFirestore
  ) {
    super('income-categories', tenantService, afs);
  }
}
