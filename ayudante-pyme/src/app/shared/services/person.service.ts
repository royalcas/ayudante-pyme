import { PersonType } from './../model/person.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Person } from '../model/person.model';
import { Observable, from } from 'rxjs';
import { BaseFirebaseServiceService } from './base-firebase-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseFirebaseServiceService<Person> {
  constructor(afs: AngularFirestore) {
    super('directory', afs);
  }

  getCustomers(tenant: string): Observable<Person[]> {
    return from (
      this.afs.collection<Person>(this.getCollectionName(tenant), ref => ref.where('type', '==', PersonType.Client)).valueChanges()
    );
  }


  lookupPersonInList(criteria: string, people: Person[]): Observable<Person[]> {
    if (!criteria) {
      return Observable.of(people.slice());
    }

    criteria = criteria.toLowerCase();
    const filtered =  people.filter((person: Person) => {
      return person.name.toLowerCase().indexOf(criteria) >= 0
              || (person.identification && person.identification.idNumber.toLowerCase().indexOf(criteria)) >= 0
              || (person.email.toLowerCase().indexOf(criteria)) >= 0;
    });

    return Observable.of(filtered);
  }

  getProviders(tenant: string): Observable<Person[]> {
    return from (
      this.afs.collection<Person>(this.getCollectionName(tenant), ref => ref.where('type', '==', PersonType.Provider)).valueChanges()
    );
  }

}
