import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { GetUserByIdUsecase } from 'src/app/shared/usecase/get-user-by-id.usecase';

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
      username: [null],
      password: [null],
      isRememberMe: [false],
    });
  }

  public async handleSignIn(): Promise<void> {
    const userId = '1';
    localStorage.setItem(this.globalService.constant.SESSION_ID, userId);
    const user = await this._getUserByIdUsecase.execute(+userId);
    this.globalService.session.setUser(user);
    this.globalService.session.sessionId = userId;
    this.router.navigate(['/']);
  }
}
