import {Component, OnInit} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent} from '@angular/router';
import {ApiService} from './modules/application/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isShowingRouteLoadIndicator: boolean;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
    this.isShowingRouteLoadIndicator = false;
    let asyncLoadCount = 0;
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          asyncLoadCount++;
        } else if (event instanceof RouteConfigLoadEnd) {
          asyncLoadCount--;
        }
        this.isShowingRouteLoadIndicator = !!asyncLoadCount;
      }
    );
  }

  ngOnInit(): void {
    this.apiService.call('user/access', 'get', []).subscribe(
      d => {
        console.log(d);
      }
      );
  }
}
