import { ImageSearchResponse } from './../models/ImageSearchResponse';
import { Item } from './../models/Item';
import { Component, OnInit } from '@angular/core';
import { ImageSearchService } from '../services/image-search-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private imageItems: Item[] = [];

  constructor(private searchService: ImageSearchService) { }

  ngOnInit() {
    this.searchService.searchEvent.subscribe( searchText => this.fetchImages(searchText));
  }

  onSearch(searchText: String){
    console.dir(searchText);
    this.searchService.fetchImages(searchText)
    .subscribe( 
      (resp: any ) => {
      console.dir(resp);
      //this.imageItems = resp.items;
    },
    (error: String) => console.log(error),
    () => console.log("Completed")
  );
  }

  fetchImages(searchText: String){
    this.searchService.fetchImages(searchText)
    .subscribe( 
      (resp: any ) => {
      console.dir(resp);
      this.imageItems = resp.items;
    },
    (error: String) => console.log(error),
    () => console.log("Completed")
  );
  }


}
