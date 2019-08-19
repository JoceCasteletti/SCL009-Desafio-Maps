import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  subscription: Subscription;
  isCollapsed: boolean;

  constructor(private sidebarService: SidebarService) {
    this.subscription = this.sidebarService
      .isCollapsed().subscribe(isCollapsed => this.isCollapsed = isCollapsed)
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
