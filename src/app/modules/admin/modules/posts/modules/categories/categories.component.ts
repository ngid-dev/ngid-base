import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { CategoryModel } from './category.model';
import { PopupFormService } from './components/popup/form/form.service';
import { DeleteCategoryUsecase } from './usecase/delete.usecase';
import { GetAllCategoryUsecase } from './usecase/get-all.usecase';

@Component({
  templateUrl: './categories.component.html',
})
export class CategoriesComponent extends BaseModule {
  public categories: Array<CategoryModel>;
  constructor(
    private _popupFormService: PopupFormService,
    private _deleteUsecase: DeleteCategoryUsecase,
    private _getAllUsecase: GetAllCategoryUsecase
  ) {
    super('module.admin.module.posts.module.categories');
  }

  protected onInit(): void {
    this.getCategories();
    this.setStateReady();
  }

  private getCategories(): void {
    const sub = this._getAllUsecase
      .execute('?_sort=created_at&_order=desc')
      .subscribe((categories: Array<CategoryModel>) => {
        this.categories = categories;
      });
    this.subscription.add(sub);
  }

  public handleAdd(): void {
    this._popupFormService.open().subscribe((category) => {
      this.categories.splice(0, 0, category);
    });
  }

  public handleEdit(category: CategoryModel, position: number): void {
    this._popupFormService.open(category).subscribe((model) => {
      this.categories.splice(position, 1, model);
    });
  }

  public handleView(category: CategoryModel, position: number): void {
    this._popupFormService.open(category, true).subscribe((model) => {
      this.categories.splice(position, 1, model);
    });
  }

  public handleDelete(category: CategoryModel, position: number): void {
    this.globalService.modal.deleteConfirmation().subscribe((result) => {
      if (result) {
        this._deleteUsecase.execute(category.id).subscribe(() => {
          this.categories.splice(position, 1);
          this.globalService.toastService.showSuccess(
            `${this.moduleCode}.toast.success.delete`
          );
        });
      }
    });
  }
}
