import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TreesButtonComponent } from './trees-button/trees-button.component';
import { TreesImageComponent } from './trees-image/trees-image.component';
import { TreesMapComponent } from './trees-map/trees-map.component';
import { TreesCommentComponent } from './trees-comment/trees-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    TreesButtonComponent,
    TreesImageComponent,
    TreesMapComponent,
    TreesCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
