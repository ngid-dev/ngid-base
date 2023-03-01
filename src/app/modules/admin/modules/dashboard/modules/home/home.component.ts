import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import {
  GenderModel,
  ReligionModel,
} from 'src/app/modules/admin/shared/models';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseModule {
  public genders: Array<GenderModel>;
  public religions: Array<ReligionModel>;
  constructor() {
    super('module.admin.module.dashboard.module.home');
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.buildFormGroup();
    this.setStateReady();
  }

  private setStateInitialization(): void {
    this.genders = GenderModel.createList();
    this.religions = ReligionModel.createList();
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        Validators.required('app.form.validation.required.username'),
      ],
      age: [null, Validators.required('app.form.validation.required.age')],
      NIK: [null, Validators.required('app.form.validation.required.NIK')],
      salary: [
        null,
        Validators.required('app.form.validation.required.salary'),
      ],
      phoneNumber: [
        null,
        Validators.required('app.form.validation.required.phoneNumber'),
      ],
      about: [null, Validators.required('app.form.validation.required.about')],
      gender: [
        null,
        Validators.required('app.form.validation.required.gender'),
      ],
      religion: [
        null,
        Validators.required('app.form.validation.required.religion'),
      ],
    });
  }

  public handleSave(): void {
    this.validate();
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}
