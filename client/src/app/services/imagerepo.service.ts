import { Injectable } from '@angular/core';
import  {HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Observable, tap, catchError, throwError} from 'rxjs';
import { ErrorService } from './error.service';
import { IImage } from '../models/image';
import { IImageDetails } from '../models/imagedetails';
import { CustomAppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ImageRepoService {
  readonly imageRepoUrl = CustomAppConfig.imageRepoUrl;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) {
  }

  imageList: IImage[] = [];

  getImages(): Observable<IImage[]> {
    let apiUrl = new URL('/images/', this.imageRepoUrl);
    return this.httpClient.get<IImage[]>(apiUrl.toString()).pipe(
      tap(images => this.imageList = images),
      catchError(this.errorHandler.bind(this))
    );
  }

  getImageDetails(imageid: number): Observable<IImageDetails> {
    let apiUrl = new URL(`/images/${imageid}`, this.imageRepoUrl);
    return this.httpClient.get<IImageDetails>(apiUrl.toString()).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  addImageComment(imageid: number, text: string): Observable<HttpResponse<any>> {
    let apiUrl = new URL(`/images/${imageid}/comments`, this.imageRepoUrl);
    return this.httpClient.post<HttpResponse<any>>(apiUrl.toString(), { comment: text }, { observe: 'response' }).pipe(
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
