import { Component, OnInit } from '@angular/core';
import { IImage } from './models/image';
import { ModalService } from './services/modal.service';
import { ImageRepoService } from './services/imagerepo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test Image Gallery with dialog';
  previewImageList: IImage[] = [];

  constructor(private repoService: ImageRepoService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.repoService.getImages().subscribe(images => {
      this.previewImageList = images;
    });
  }
}
