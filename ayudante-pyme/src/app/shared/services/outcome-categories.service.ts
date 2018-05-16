import { Injectable } from '@angular/core';
import { TenantService } from './tenant.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root'
})
export class OutcomeCategoriesService extends CategoriesService {

  constructor(
    protected tenantService: TenantService,
    protected afs: AngularFirestore
  ) {
    super('outcome-categories', tenantService, afs);
  }
}
