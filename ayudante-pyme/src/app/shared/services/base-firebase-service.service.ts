import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';

export abstract class BaseFirebaseServiceService<TEntity> {

  constructor(protected sufix: string, protected afs: AngularFirestore) { }

  protected getCollection(tenant: string): AngularFirestoreCollection<TEntity> {
    return this.afs.collection<TEntity>(this.getCollectionName(tenant));
  }

  protected getCollectionName(tenant): string {
    return `${tenant}-${this.sufix}`;
  }

  getAll(tenant: string): Observable<TEntity[]> {
    return this.getCollection(tenant).valueChanges();
  }

  add(tenant: string, item: TEntity): Observable<any> {

    return from(this.getCollection(tenant).add(this.getPayload(item)));
  }

  getPayload(item: any): any {
    return JSON.parse(JSON.stringify(item));
  }
}
