import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ImageSearchService } from '../services/image-search-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  @Input() searchText: string;
  @Output('searchSelect') emitter: EventEmitter<String> = new EventEmitter<String>();

  constructor(private searchService: ImageSearchService){}

  handleSearch(){
    console.dir(this.searchText);
    //this.emitter.emit(this.searchText);
    this.searchService.searchEvent.next(this.searchText);
  }

}
