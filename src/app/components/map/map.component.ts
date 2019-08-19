import { Component, OnInit } from '@angular/core';
import {MarkerService} from '../../services/marker/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 35;
  longitude: number = -96;
  zoom: number = 3;

  constructor(public markerService: MarkerService) { }

  ngOnInit() {
    // .markers.forEach(x => console.log(x))
  }

}
