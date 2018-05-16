import { Injectable } from '@angular/core';
import { BaseFirebaseService } from './base-firebase-service.service';
import { Tenant } from '../model/tenant.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(protected afs: AngularFirestore) {
  }

  getCurrentTenantName(): string {
    return 'royalcas';
  }

  getTenantCollectionRef(): AngularFirestoreCollection<Tenant> {
    return this.afs.collection<Tenant>('tenants');
  }

  getTenantDocumentRef(): AngularFirestoreDocument<any> {
    const tenant = this.getCurrentTenantName();
    return this.getTenantCollectionRef().doc(tenant);
  }
}
