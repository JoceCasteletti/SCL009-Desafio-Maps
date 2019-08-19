import {Component, OnDestroy, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isCollapsed: boolean;

  constructor(private sidebarService: SidebarService) {
    this.subscription = this.sidebarService
      .isCollapsed().subscribe(isCollapsed => this.isCollapsed = isCollapsed);
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
