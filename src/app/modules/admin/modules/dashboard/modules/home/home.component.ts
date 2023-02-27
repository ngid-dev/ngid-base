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
      age: [null, Validators.required('app.form.validation.required.age')],
    });
  }

  public handleSave(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}
