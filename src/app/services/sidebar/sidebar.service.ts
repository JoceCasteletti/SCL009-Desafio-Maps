import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {SimpleMarker} from '../../classes/simple-marker';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public show = true;
  private collapsed: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

  toggleCollapse(): void {
    this.show = !this.show;
    this.collapsed.next(this.show);
  }

  isCollapsed(): Observable<boolean> {
    return this.collapsed.asObservable();
  }
}
