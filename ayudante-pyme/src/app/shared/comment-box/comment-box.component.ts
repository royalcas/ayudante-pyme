import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { UserComment } from '../model/comment.model';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {
  @Input() targetId: string;
  @Input() disabled: boolean;
  @Input() showInput: boolean;
  comments: UserComment[] = [];
  currentComment: UserComment = UserComment.default();

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    if (this.targetId) {
      this.commentService.getByTargetId('hood', this.targetId).subscribe((comments) => {
        this.comments = comments;
      });
    }
  }

  save(event: any): void {
    this.currentComment.date = new Date();
    this.comments.push(this.currentComment);
    this.currentComment = UserComment.default();

    if (this.targetId) {
      this.commentService.add(this.currentComment);
    }
  }

}
