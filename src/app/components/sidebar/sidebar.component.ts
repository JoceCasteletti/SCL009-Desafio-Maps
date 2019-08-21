import {Component, OnDestroy, OnInit} from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Subscription } from 'rxjs';
import {MarkerService} from '../../services/marker/marker.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarService: SidebarService, public markerService: MarkerService) {

   }

  ngOnInit() {
  }
}
