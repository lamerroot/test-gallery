import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewimageComponent } from './components/previewimage/previewimage.component';
import { ModalComponent } from './components/modal/modal.component';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { ImageRepoErrorComponent } from './components/image-repo-error/image-repo-error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PreviewimageComponent,
    ModalComponent,
    ImagedetailsComponent,
    CommentsComponent,
    FocusDirective,
    ImageRepoErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
