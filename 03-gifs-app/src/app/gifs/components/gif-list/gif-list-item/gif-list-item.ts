import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.intergace';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',

})
export class GifListItem {
   imageUrl = input.required<string>();
}
