import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from 'src/app/core/base';
import { TextHelper } from 'src/app/shared/helpers/text.helper';
import { Validators } from 'src/app/shared/validators';
import { CategoriesService } from '../../../categories.service';
import { CategoryModel } from '../../../category.model';
import { CreateCategoryUsecase } from '../../../usecase/create.usecase';
import { GetAllCategoryUsecase } from '../../../usecase/get-all.usecase';
import { UpdateCategoryUsecase } from '../../../usecase/update.usecase';

@Component({
  templateUrl: './form.component.html',
  providers: [
    CreateCategoryUsecase,
    UpdateCategoryUsecase,
    CategoriesService,
    GetAllCategoryUsecase,
  ],
})
export class PopupFormComponent extends BaseComponent {
  @Input() public category: CategoryModel;
  @Input() public isView: boolean;
  @Output() public onClose: EventEmitter<void>;
  @Output() public onChange: EventEmitter<CategoryModel>;

  public categories: Array<CategoryModel>;

  constructor(
    private _create: CreateCategoryUsecase,
    private _update: UpdateCategoryUsecase,
    private _getAll: GetAllCategoryUsecase
  ) {
    super('module.admin.module.posts.module.categories.component.popup.form');
    this.onClose = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  protected onInit(): void {
    this.buildFormGroup();
    this.getCategories();
  }

  public buildFormGroup(): void {
    const { id, name, description, parent, createdAt } = this.category || {};
    this.formGroup = this.formBuilder.group({
      id: [id || TextHelper.generateRandomId()],
      name: [
        name || null,
        Validators.required(`${this.moduleCode}.form.validation.required.name`),
      ],
      description: [
        description || null,
        Validators.required(
          `${this.moduleCode}.form.validation.required.description`
        ),
      ],
      parent: [parent || null],
      createdAt: [createdAt || Date.now()],
    });
  }

  private getCategories(): void {
    this._getAll.execute().subscribe((categories) => {
      this.categories = categories;
      this.isView ? this.setStateDisable() : this.setStateReady();
    });
  }

  public handleCancel(): void {
    if (this.formGroup.dirty) {
      this.globalService.modal.leaveConfirmation().subscribe((result) => {
        if (!result) {
          this.onClose.emit();
        }
      });
    } else {
      this.onClose.emit();
    }
  }

  public handleSave(): void {
    this.validate();
    if (this.formGroup.valid) {
      this.category ? this.updateCategory() : this.createCategory();
    }
  }

  private createCategory(): void {
    this.globalService.modal
      .saveConfirmation({
        header: `${this.moduleCode}.modal.save.header.create`,
        message: `${this.moduleCode}.modal.save.message.create`,
        positiveButton: 'app.button.yes',
      })
      .subscribe((result) => {
        if (result) {
          this._create.execute(this.formGroup.value).subscribe(() => {
            this.globalService.toastService.showSuccess(
              `${this.moduleCode}.toast.success.create`
            );
            this.onChange.emit(this.formGroup.value);
          });
        }
      });
  }

  private updateCategory(): void {
    this.globalService.modal
      .saveConfirmation({
        header: `${this.moduleCode}.modal.save.header.update`,
        message: `${this.moduleCode}.modal.save.message.update`,
        positiveButton: 'app.button.yes',
      })
      .subscribe((result) => {
        if (result) {
          this._update.execute(this.formGroup.value).subscribe(() => {
            this.globalService.toastService.showSuccess(
              `${this.moduleCode}.toast.success.update`
            );
            this.onChange.emit(this.formGroup.value);
          });
        }
      });
  }
}
