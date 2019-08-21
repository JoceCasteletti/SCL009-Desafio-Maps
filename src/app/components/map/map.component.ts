import { Component, OnInit } from '@angular/core';
import {MarkerService} from '../../services/marker/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(public markerService: MarkerService) {
    this.latitude = 35;
    this.longitude = -91;
    this.zoom = 3;
  }

  ngOnInit() {
  }
}
