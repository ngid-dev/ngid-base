import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { PopupService } from 'src/app/shared/components/advanced/popup';
import { errorMessage } from 'src/app/shared/config';
import { GetUserByIdUsecase } from 'src/app/shared/usecase/get-user-by-id.usecase';
import { Validators } from 'src/app/shared/validators';
import { ExampleComponent } from './example.component';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent extends BaseModule {
  constructor(
    private _getUserByIdUsecase: GetUserByIdUsecase,
    private popupService: PopupService
  ) {
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
    const user = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
    };
    this.popupService
      .open(ExampleComponent, { user, id: 1 }, { size: 'sm' })
      .subscribe((result) => {
        if (result) {
          console.log('SignIn');
          console.log(user);
        } else {
          console.log('Not signIn');
        }
      });

    // if (this.formGroup.valid) {
    //   const userId = '1';
    //   localStorage.setItem(this.globalService.constant.SESSION_ID, userId);
    //   const user = await this._getUserByIdUsecase.execute(+userId);
    //   this.globalService.session.setUser(user);
    //   this.globalService.session.sessionId = userId;
    //   this.router.navigate(['/']);
    //   this.globalService.toastService.showSuccess(
    //     `${this.moduleCode}.toast.success.signIn`
    //   );
    // } else {
    //   this.globalService.toastService.showError('Data belum lengkap');
    //   this.globalService.toastService.showSuccess('Data berhasil disimpan', {
    //     position: 'BOTTOM-LEFT',
    //     timeOut: 5000,
    //   });
    // }
  }
}
