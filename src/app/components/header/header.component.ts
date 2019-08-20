import {Component, OnDestroy, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import {Subscription} from 'rxjs';
import {MarkerService} from '../../services/marker/marker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title = 'FavStores';
  subscription: Subscription;
  isCollapsed: boolean;

  constructor(private sidebarService: SidebarService, public markerService: MarkerService) {
    this.subscription = this.sidebarService
      .isCollapsed().subscribe(isCollapsed => this.isCollapsed = isCollapsed);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
