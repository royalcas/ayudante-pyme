import { Entity } from './../model/entity.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { TenantService } from './tenant.service';
import { QueryFn, DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { map } from 'rxjs/operators';

export abstract class BaseFirebaseService<TEntity extends Entity> {

  constructor(
    protected collectionName: string,
    protected tenantService: TenantService,
    protected afs: AngularFirestore
  ) { }

  protected getCollection(query: QueryFn = null): AngularFirestoreCollection<TEntity> {
    if (query) {
      return this.tenantService.getTenantDocumentRef()
        .collection(this.collectionName, query);
    }

    return this.tenantService.getTenantDocumentRef()
      .collection(this.collectionName);
  }

  getAll(): Observable<TEntity[]> {
    return this.getCollection().snapshotChanges().pipe(
      map((items: DocumentChangeAction[]) => {
        return items.map((item: DocumentChangeAction) => {
          const element = this.mapFromResponse(item.payload.doc.data());
          element.id = item.payload.doc.id;
          return element;
        }
        );
      }
      )
    );
  }

  find(query: QueryFn): Observable<TEntity[]> {
    return from(
      this.getCollection(query).valueChanges().pipe(
        map((items: any[]) => items.map(this.mapFromResponse.bind(this)))
      )
    );
  }

  findById(itemId: string): Observable<TEntity> {
    return from(
      this.getCollection().doc(itemId).valueChanges().pipe(
        map((item: any) => {
          const element = this.mapFromResponse(item);
          element.id = itemId;
          return element;
        }))
    );
  }

  add(item: TEntity): Observable<any> {
    if (item.id) {
      return from(
        this.getCollection().doc(item.id).set(item.mapToJson())
      );
    }

    return from(
      this.getCollection().add(item.mapToJson() as TEntity)
    );
  }

  update(item: TEntity): Observable<any> {
    return from(
      this.getCollection().doc(item.id).update(item.mapToJson())
    );
  }

  delete(itemId: string): Observable<any> {
    return from(
      this.getCollection().doc(itemId).delete()
    );
  }

  mapFromResponse(rawData: any): TEntity {
    return rawData as TEntity;
  }
}
