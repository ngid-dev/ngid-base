import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { errorMessage } from 'src/app/shared/config';
import { GetUserByIdUsecase } from 'src/app/shared/usecase/get-user-by-id.usecase';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent extends BaseModule {
  constructor(private _getUserByIdUsecase: GetUserByIdUsecase) {
    super('module.auth.module.sign-in');
  }

  protected onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [null, Validators.required(errorMessage.required.username)],
      password: [null, Validators.required(errorMessage.required.password)],
      isRememberMe: [false],
    });
  }

  public async handleSignIn(): Promise<void> {
    this.validate();
    if (this.formGroup.valid) {
      const userId = '1';
      localStorage.setItem(this.globalService.constant.SESSION_ID, userId);
      const user = await this._getUserByIdUsecase.execute(+userId);
      this.globalService.session.setUser(user);
      this.globalService.session.sessionId = userId;
      this.router.navigate(['/']);
      this.globalService.toastService.showSuccess(
        `${this.moduleCode}.toast.success.signIn`
      );
    }
  }
}
