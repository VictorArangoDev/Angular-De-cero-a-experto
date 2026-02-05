import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.intergace';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifsService = inject(GifService)
  gifs = signal<Gif[]>([]);

  onSearch(query:string){
    this.gifsService.searchGifs(query).subscribe((resp) =>{
      this.gifs.set(resp);
    });
  }
 }
