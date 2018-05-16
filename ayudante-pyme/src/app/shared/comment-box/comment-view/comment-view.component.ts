import { UserComment } from './../../model/comment.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {
  @Input() comment: UserComment;
  constructor() { }

  ngOnInit() {
  }

}
