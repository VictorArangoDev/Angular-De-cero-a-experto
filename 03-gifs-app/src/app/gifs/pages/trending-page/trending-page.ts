import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifsService = inject(GifService)

  scrollDivRef = viewChild<ElementRef<HTMLAnchorElement>>('groupDiv');

  onScroll(event: Event){
    const scrollDiv =  this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHight = scrollDiv.scrollHeight;

    const isAtBottom =  scrollTop + clientHeight +300 >= scrollHight;

    if( isAtBottom ){
      this.gifsService.loadTrendingGifs();
      

    }


  }

 }
