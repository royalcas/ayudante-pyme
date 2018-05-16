import { Category } from './../model/category.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseFirebaseService } from './base-firebase-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { TenantService } from './tenant.service';
import { publish, refCount, filter, map } from 'rxjs/operators';

export class CategoriesService extends BaseFirebaseService<Category> {

  categories$: Observable<Category[]>;

  constructor(
    protected collectionName: string,
    protected tenantService: TenantService,
    protected afs: AngularFirestore
  ) {
    super(collectionName, tenantService, afs);
  }

  getAllFromCache(): Observable<Category[]> {
    if (!this.categories$) {
      this.categories$ = this.getAll().pipe(
        publish(),
        refCount()
      );
    }

    return this.categories$;
  }

  findById(id: string): Observable<Category> {
    return this.getAllFromCache().pipe(
      map((categories: Category[]) => categories.find((category) => category.id === id))
    );
  }

  getLinearCategories(): Observable<Category[]> {
    return this.getAllFromCache().pipe(
      map((categories: Category[]) => this.linealizeCategories(categories))
    );
  }

  linealizeCategories(categories: Category[]): Category[] {
    return categories.reduce((linealizedCategories: Category[], category: Category) => {
      if (category.children && category.children.length) {
        const linealizedChildren = this.linealizeCategories(category.children);
        const categoryEmpty = Category.create(category.id, category.name, category.description);
        return [...linealizedCategories, categoryEmpty, ...linealizedChildren];
      } else {
        return [ ...linealizedCategories, category];
      }
    }, []);
  }

}
