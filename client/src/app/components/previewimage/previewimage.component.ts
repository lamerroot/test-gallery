import { Component, Input } from '@angular/core';
import { IImage } from 'src/app/models/image';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-previewimage',
  templateUrl: './previewimage.component.html',
  styleUrls: ['./previewimage.component.css']
})

export class PreviewimageComponent {
  @Input() imageRef: IImage

  constructor (public modalService: ModalService) {
  }
}
