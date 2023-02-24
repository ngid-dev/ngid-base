import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('showButtonBackToTop', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'default',
        style({
          opacity: 0,
          top: '100%',
        })
      ),
      transition('show<=>default', animate(300)),
    ]),
  ],
})
export class FooterComponent extends BaseComponent {
  public currentYear: number;
  public isShowbackToTop: boolean;
  constructor() {
    super('module.admin.layout.component.footer');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.currentYear = new Date().getFullYear();
  }

  public handleBackToTop(): void {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public handleScroll(event: HTMLElement): void {
    this.isShowbackToTop = event.scrollTop > 50;
  }
}
