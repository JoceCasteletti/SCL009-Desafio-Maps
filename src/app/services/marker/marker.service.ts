import { Injectable } from '@angular/core';
import markerCollection from './marker.collection.json';
import {SimpleMarker} from '../../classes/simple-marker';
import {SimpleCoordinates} from '../../classes/simple-coordinates';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  markers: SimpleMarker[];
  favoriteMarkers: SimpleMarker[] = [];

  constructor() {
    this.markers = markerCollection.map(x => {
      const simpleMarker = new SimpleMarker();
      simpleMarker.name = x.Name;
      simpleMarker.address = x.Address;
      simpleMarker.coordinates = new SimpleCoordinates();
      simpleMarker.coordinates.latitude = x.Coordinates.lat;
      simpleMarker.coordinates.longitude = x.Coordinates.lng;

      return simpleMarker;
    });
  }

  addFavoriteMarker(marker: SimpleMarker) {
    if (!this.favoriteMarkers.includes(marker)) {
      this.favoriteMarkers.push(marker);
    }
  }

  removeFavoriteMarker(marker: SimpleMarker) {
    if (this.favoriteMarkers.includes(marker)) {
      this.favoriteMarkers = this.favoriteMarkers.filter(x => x !== marker);
    }
  }
}
