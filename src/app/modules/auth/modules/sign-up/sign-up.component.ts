import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { errorMessage } from 'src/app/shared/config';
import { Validators } from 'src/app/shared/validators';

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
      username: [null, Validators.required(errorMessage.required.username)],
      password: [null, Validators.required(errorMessage.required.password)],
      email: [
        null,
        Validators.compose([
          Validators.required(errorMessage.required.email),
          Validators.email(),
        ]),
      ],
    });
  }

  public handleSignUp(): void {
    console.log('INFO: Come from handleSignUp');
    console.log(this.formGroup.value);
  }
}
