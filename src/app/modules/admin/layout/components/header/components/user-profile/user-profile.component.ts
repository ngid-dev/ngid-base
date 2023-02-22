import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';

@Component({
  selector: 'header-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent extends BaseComponent {
  constructor() {
    super('module.admin.layout.component.header.component.user-profile');
  }

  protected onInit(): void {
    this.setStateReady();
  }

  public handleSignOut(event: Event): void {
    event.preventDefault();
    this.globalService.session.reset();
    this.router.navigate(['/auth/sign-in']);
  }
}
