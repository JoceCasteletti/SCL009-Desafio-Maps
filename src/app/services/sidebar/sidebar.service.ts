import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public show = false;
  private collapsed: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  toggleCollapse(): void {
    this.show = !this.show;
    this.collapsed.next(this.show);
  }

  isCollapsed(): Observable<boolean> {
    return this.collapsed.asObservable();
  }
}
