import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Comment } from "../comment";
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['../comments.component.css']
})
export class CommentCreateComponent implements OnInit {

  form: FormGroup;
  title: string;
  comment: Comment = new Comment;

  constructor(
      formBuilder: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private commentService: CommentService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2)
      ]],
      comment: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(1000)
      ]],

    });
  }

  ngOnInit() {

  }

  save() {
    let result, commentValue = this.form.value;
    result = this.commentService.addComment(commentValue);

    result.subscribe(data => this.router.navigate(['/main']));
  }

}
