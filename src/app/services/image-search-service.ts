import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ImageSearchResponse } from '../models/ImageSearchResponse';
import { Subject } from 'rxjs/Subject';

const FLIKR_API_URL: String = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=";

@Injectable()
export class ImageSearchService {

  searchEvent: Subject<String> = new Subject();

  constructor(private http: HttpClient) { }

  public fetchImages(searchText: String){
    return this.http.get(`${FLIKR_API_URL}${searchText}`);
  }
  
}
