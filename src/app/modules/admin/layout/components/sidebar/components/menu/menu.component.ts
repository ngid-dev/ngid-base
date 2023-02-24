import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import {
  expandCollapseAnimation,
  rotateAnimation,
} from 'src/app/shared/animations';
import { SidebarMenuModel } from '../../sidebar-menu.model';
import { menus } from './menu.data';

@Component({
  selector: 'admin-layout-sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [expandCollapseAnimation(), rotateAnimation()],
})
export class SidebarMenuComponent extends BaseComponent {
  @Input() isSmallSidebarWidth: boolean;

  public menus: Array<SidebarMenuModel>;

  constructor() {
    super('module.admin.layout.component.sidebar.component.menu');
  }

  protected onInit(): void {
    this.setStateMenus();
    this.setStateReady();
  }

  private setStateMenus(): void {
    this.menus = menus.map((menu) => SidebarMenuModel.create(menu));
    console.log(this.menus);
  }

  public handleExpand(menu: SidebarMenuModel): void {
    if (menu.childrens && menu.childrens.length > 0) {
      menu.isExpanded = !menu.isExpanded;
    } else {
      this.router.navigate([menu.routerLink]);
    }
  }
}
