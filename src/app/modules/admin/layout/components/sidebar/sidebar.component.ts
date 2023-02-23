import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends BaseComponent {
  @Input() isSmallSidebarWidth: boolean;
  public menus: Array<{ name: string; routerLink: string; icon: string }>;

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
        icon: 'fas fa-dashboard',
      },
      {
        name: 'Posts',
        routerLink: '/posts',
        icon: 'fas fa-pen',
      },
      {
        name: 'Media',
        routerLink: '/media',
        icon: 'fas fa-photo-film',
      },
      {
        name: 'Pages',
        routerLink: '/pages',
        icon: 'fas fa-file',
      },
      {
        name: 'Comments',
        routerLink: '/comments',
        icon: 'fas fa-comments',
      },
      {
        name: 'Appearance',
        routerLink: '/appearance',
        icon: 'fas fa-palette',
      },
      {
        name: 'Plugins',
        routerLink: '/plugins',
        icon: 'fas fa-plug',
      },
      {
        name: 'Users',
        routerLink: '/users',
        icon: 'fas fa-users',
      },
      {
        name: 'Tools',
        routerLink: '/tools',
        icon: 'fas fa-tools',
      },
      {
        name: 'Settings',
        routerLink: '/settings',
        icon: 'fas fa-toolbox',
      },
    ];
  }
}
