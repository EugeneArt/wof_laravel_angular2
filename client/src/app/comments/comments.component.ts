import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import {Comment} from "./comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {

  private comments: Comment[] = [];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService.getComments().subscribe(data => {
      this.comments = data;
    });
  }

  deleteComment(comment) {
    if (confirm("Are you sure you want to delete " + comment.name + "?")) {
      let index = this.comments.indexOf(comment);
      this.comments.splice(index, 1);

      this.commentService.deleteComment(comment.id)
          .subscribe(null,
              err => {
                alert("Could not delete comment.");
                // Revert the view back to its original state
                this.comments.splice(index, 0, comment);
              });
    }
  }

}