import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = true;
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
