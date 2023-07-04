import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponseBase } from '@angular/common/http';
import { IImageDetails } from 'src/app/models/imagedetails';
import { ErrorService } from 'src/app/services/error.service';
import { ImageRepoService } from 'src/app/services/imagerepo.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() imageDetails: IImageDetails;

  addCommentForm = new FormGroup({
    commentText: new FormControl<string>('', [
      Validators.required
    ])
  })

  get inputComment() {
    return this.addCommentForm.controls.commentText as FormControl;
  }

  constructor(private repoService: ImageRepoService, private errorService: ErrorService) {
  }

  submitComment() {
    if (this.addCommentForm.valid) {
      //console.log(this.addCommentForm.value);
      let commentText = this.addCommentForm.value['commentText'] as string;
      commentText && this.repoService.addImageComment(this.imageDetails.id, commentText).subscribe(
        (response: HttpResponseBase) => {
          if (response.status == 204) {
            this.imageDetails.comments.push(commentText);
            this.addCommentForm.reset();
          } else {
            this.errorService.handle(`Failed to add a comment: ${response.statusText}`);
          }
        }
      );
    }
  }
}
