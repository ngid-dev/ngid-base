import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends BaseComponent {
  public menus: Array<{ name: string; routerLink: string }>;

  constructor() {
    super('module.admin.layout.component.sidebar');
  }

  protected onInit(): void {
    this.setStateMenus();
    this.setStateReady();
  }

  private setStateMenus(): void {
    this.menus = [
      {
        name: 'Dashboard',
        routerLink: '/',
      },
      {
        name: 'Posts',
        routerLink: '/posts',
      },
      {
        name: 'Media',
        routerLink: '/media',
      },
      {
        name: 'Pages',
        routerLink: '/pages',
      },
      {
        name: 'Comments',
        routerLink: '/comments',
      },
      {
        name: 'Appearance',
        routerLink: '/appearance',
      },
      {
        name: 'Plugins',
        routerLink: '/plugins',
      },
      {
        name: 'Users',
        routerLink: '/users',
      },
      {
        name: 'Tools',
        routerLink: '/tools',
      },
      {
        name: 'Settings',
        routerLink: '/settings',
      },
    ];
  }
}
