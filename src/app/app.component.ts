import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { SearchService } from './music/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private readonly searchSvc:SearchService){
   this.searchSvc.search('angular')
   .pipe(
     tap(res=>console.log(res))
   )
   .subscribe();
 }
}
