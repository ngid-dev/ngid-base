import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showShadow', [
      state(
        'shadow',
        style({
          'box-shadow': '0 2px 8px 0 rgb(0 0 0 / 5%)',
        })
      ),
      state('default', style({})),
      transition('showShadow<=>shadow', animate(200)),
    ]),
  ],
})
export class HeaderComponent extends BaseComponent {
  @Output() onChangeSidebarWidth: EventEmitter<void>;
  public isShowShadow: boolean;
  constructor() {
    super('module.admin.layout.component.header');
    this.onChangeSidebarWidth = new EventEmitter();
  }

  protected onInit(): void {
    this.setStateReady();
  }

  public handleScroll(event: HTMLElement): void {
    this.isShowShadow = event.scrollTop > 10;
  }
}
