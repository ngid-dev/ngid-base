import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent extends BaseModule {
  constructor() {
    super('module.auth.module.sign-up');
  }

  protected onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [null],
      password: [null],
      email: [null],
    });
  }

  public handleSignUp(): void {
    console.log('INFO: Come from handleSignUp');
  }
}
