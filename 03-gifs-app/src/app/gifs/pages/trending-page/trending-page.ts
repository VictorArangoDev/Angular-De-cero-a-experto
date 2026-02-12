import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../shared/services/scroll-state.service';


@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
})
export default class TrendingPage  implements AfterViewInit{
  gifsService = inject(GifService)
  scrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLAnchorElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv =  this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();

  }

  onScroll(event: Event){
    const scrollDiv =  this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHight = scrollDiv.scrollHeight;

    const isAtBottom =  scrollTop + clientHeight +300 >= scrollHight;

    this.scrollStateService.trendingScrollState.set(scrollHight);


    if( isAtBottom ){
      this.gifsService.loadTrendingGifs();


    }


  }

 }
