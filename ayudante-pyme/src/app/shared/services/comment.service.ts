import { TenantService } from './tenant.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { BaseFirebaseService } from './base-firebase-service.service';
import { UserComment } from '../model/comment.model';

@Injectable({
    providedIn: 'root'
})
export class CommentService extends BaseFirebaseService<UserComment> {

    constructor(tenantService: TenantService, afs: AngularFirestore) {
        super('comments', tenantService, afs);
    }

    getByTargetId(tenant: string, targetId: string): Observable<UserComment[]> {
        return from(
            this.afs.collection<UserComment>('comments', ref => ref.where('targetId', '==', targetId)).valueChanges()
        );
    }

}
