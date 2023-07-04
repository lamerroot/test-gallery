import { Component, Input } from '@angular/core';
import { IImageDetails } from 'src/app/models/imagedetails';


@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent {
  @Input() imageDetails: IImageDetails;
}
