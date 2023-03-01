import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { GenderModel } from 'src/app/modules/admin/shared/models';
import { Validators } from 'src/app/shared/validators';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseModule {
  public genders: Array<GenderModel>;
  public options: Array<any>;
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
    this.options = [
      {
        id: 1,
        name: 'testing 1',
        gender: {
          id: 1,
          name: 'Laki-laki',
        },
      },
      {
        id: 1,
        name: 'testing 2',
        gender: {
          id: 2,
          name: 'Perempuan',
        },
      },
    ];
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
        this.genders[0],
        Validators.required('app.form.validation.required.gender'),
      ],
      gender1: [this.options[1].gender.id],
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
