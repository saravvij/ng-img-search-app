import { Item } from './../models/Item';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnChanges {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Change detected..")
    console.dir(this.items);
  }

}
