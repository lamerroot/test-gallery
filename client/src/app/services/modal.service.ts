import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IImageDetails } from '../models/imagedetails';
import { ImageRepoService } from './imagerepo.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  imageDetails: IImageDetails;
  isVisible = new BehaviorSubject<boolean>(false);

  constructor (private imageRepo: ImageRepoService) {
  }

  show(imageid: number) {
    this.imageRepo.getImageDetails(imageid).subscribe(imageDetails => {
      this.imageDetails = imageDetails;
      this.isVisible.next(true);
    });
  }

  hide() {
    this.isVisible.next(false);
  }
}
