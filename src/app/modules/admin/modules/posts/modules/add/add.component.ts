import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseModule } from 'src/app/core/base';
import { TextHelper } from 'src/app/shared/helpers/text.helper';
import { Validators } from 'src/app/shared/validators';
import { PostsModel } from '../../shared/models';
import {
  AddUsecase,
  GetByIdUsecase,
  UpdateUsecase,
} from '../../shared/usecase';

@Component({
  templateUrl: './add.component.html',
})
export class AddComponent extends BaseModule {
  public id: string;
  public isView: boolean;
  constructor(
    private _usecase: AddUsecase,
    private _route: ActivatedRoute,
    private _getByIdUsecase: GetByIdUsecase,
    private _updateUsecase: UpdateUsecase
  ) {
    super(
      'module.admin.module.posts.module.' +
        (_route.snapshot.queryParams.id
          ? _route.snapshot.data.isView
            ? 'detail'
            : 'edit'
          : 'add')
    );
  }

  protected onInit(): void {
    this.setStateInitialization();
    this.buildFormGroup();
    this.getPostById();
  }

  private setStateInitialization(): void {
    const { id } = this._route.snapshot.queryParams;
    const { isView } = this._route.snapshot.data;
    this.id = id;
    this.isView = !!isView;
  }

  private buildFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      id: [TextHelper.generateRandomId()],
      title: [
        null,
        Validators.required(
          `${this.moduleCode}.form.validation.required.title`
        ),
      ],
      content: [
        null,
        Validators.required(
          `${this.moduleCode}.form.validation.required.content`
        ),
      ],
      createdAt: [Date.now()],
      featuredImage: [
        `https://picsum.photos/1920/1080?${Math.ceil(Math.random() * 100000)}`,
      ],
    });
  }

  private getPostById(): void {
    if (this.id) {
      this._getByIdUsecase.execute(this.id).subscribe((model: PostsModel) => {
        this.formGroup.patchValue(model);
        this.isView ? this.setStateDisable() : this.setStateReady();
      });
    } else {
      this.setStateReady();
    }
  }

  public handleBack(): void {
    this.navigateToPost();
  }

  public handlePublish(): void {
    this.validate();
    if (this.formGroup.valid) {
      this.id ? this.updatePost() : this.createPost();
    }
  }

  private createPost(): void {
    this.globalService.modal
      .saveConfirmation({
        header: `${this.moduleCode}.modal.save.header.publish`,
        message: `${this.moduleCode}.modal.save.message.publish`,
        positiveButton: 'app.button.yes',
      })
      .subscribe((result) => {
        if (result) {
          this._usecase.execute(this.formGroup.value).subscribe(() => {
            this.globalService.toastService.showSuccess(
              `${this.moduleCode}.toast.success.publish`
            );
            this.navigateToPost();
          });
        }
      });
  }

  private updatePost(): void {
    this.globalService.modal
      .saveConfirmation({
        header: `${this.moduleCode}.modal.save.header.update`,
        message: `${this.moduleCode}.modal.save.message.update`,
        positiveButton: 'app.button.yes',
      })
      .subscribe((result) => {
        if (result) {
          this._updateUsecase.execute(this.formGroup.value).subscribe(() => {
            this.globalService.toastService.showSuccess(
              `${this.moduleCode}.toast.success.update`
            );
            this.navigateToPost();
          });
        }
      });
  }

  private navigateToPost(): void {
    this.router.navigate(['/posts']);
  }
}
