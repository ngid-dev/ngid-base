import { Component, ContentChild, TemplateRef } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent extends BaseComponent {
  @ContentChild('dropDown') dropdownTemplate: TemplateRef<any>;
  constructor() {
    super('app.dropdown');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
