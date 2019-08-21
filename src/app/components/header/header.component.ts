import {Component, OnDestroy, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import {Subscription} from 'rxjs';
import {MarkerService} from '../../services/marker/marker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'FavStores';

  constructor(private sidebarService: SidebarService, public markerService: MarkerService) {
  }

  ngOnInit() {
  }
}
