import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {
 @Input() item: Item;
}
