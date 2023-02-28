import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseModule {
  constructor() {
    super('module.admin.module.dashboard.module.home');
  }

  protected onInit(): void {
    this.buildFormGroup();
    this.setStateReady();
  }

  public buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        Validators.required('app.form.validation.required.username'),
      ],
      username1: [
        null,
        Validators.compose([
          Validators.required('app.form.validation.required.username'),
          Validators.alphaNumeric('Username harus berupa angka dan/atau huruf'),
        ]),
      ],
      username2: [
        null,
        Validators.compose([
          Validators.required('app.form.validation.required.username'),
          Validators.pattern(
            /^[a-zA-Z0-9]+$/,
            'Username harus berupa angka dan/atau huruf'
          ),
        ]),
      ],
      age: [null, Validators.required('app.form.validation.required.age')],
      NIK: [null, Validators.required('app.form.validation.required.NIK')],
    });
  }

  public handleSave(): void {
    this.validate();
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}
