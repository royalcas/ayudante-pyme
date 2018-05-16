import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentViewComponent } from './comment-box/comment-view/comment-view.component';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    CommentBoxComponent,
    CommentViewComponent
  ],
  exports: [
    CommentBoxComponent,
    CommentViewComponent
  ]
})
export class SharedModule { }
