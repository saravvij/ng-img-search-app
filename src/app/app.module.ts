import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { HomeComponent } from './home/home.component';
import { ImageSearchService } from './services/image-search-service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ImageListComponent,
    ImageItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ImageSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
