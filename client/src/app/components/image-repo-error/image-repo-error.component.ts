import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-image-repo-error',
  templateUrl: './image-repo-error.component.html',
  styleUrls: ['./image-repo-error.component.css']
})
export class ImageRepoErrorComponent {
  constructor(public errorService: ErrorService) {
  }
}
