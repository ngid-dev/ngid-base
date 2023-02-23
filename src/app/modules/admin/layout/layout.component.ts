import { Component, HostListener } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AdminLayoutComponent extends BaseComponent {
  public isSmallSidebarWidth: boolean;
  constructor() {
    super('module.admin.layout');
  }

  protected onInit(): void {
    this.setIsSmallSidebarWidth();
    this.setStateReady();
  }

  private setIsSmallSidebarWidth(): void {
    const sidebarWidth = localStorage.getItem('sidebar-width');
    if (sidebarWidth) {
      this.isSmallSidebarWidth = !!+sidebarWidth;
    }

    if (
      document.documentElement.clientWidth < 768 &&
      !this.isSmallSidebarWidth
    ) {
      this.isSmallSidebarWidth = true;
    }
  }

  public handleChangeSidebarWidth(): void {
    this.isSmallSidebarWidth = !this.isSmallSidebarWidth;
    localStorage.setItem('sidebar-width', this.isSmallSidebarWidth ? '1' : '0');
  }

  @HostListener('window:resize')
  private _onWindowResize(): void {
    this.setIsSmallSidebarWidth();
  }
}
