import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { TableModel } from 'src/app/shared/components/advanced/table';
import { PostsResponseDTO } from './shared/dtos';
import { PostsModel } from './shared/models';
import { DeleteUsecase } from './shared/usecase/delete.usecase';

@Component({
  templateUrl: './posts.component.html',
})
export class PostsComponent extends BaseModule {
  public posts: Array<PostsModel>;
  public tableModel: TableModel<PostsModel>;
  constructor(
    private _httpClient: HttpClient,
    private _deleteUsecase: DeleteUsecase
  ) {
    super('module.admin.module.posts');
  }

  protected onInit(): void {
    this.buildTable();
    // this.getPosts();
    this.setStateReady();
  }
  private buildTable(): void {
    this.tableModel = TableModel.create(this.moduleCode, [
      {
        header: 'featuredImage',
        field: 'featured_image',
      },
      {
        header: 'title',
        field: 'title',
      },
      {
        header: 'content',
        field: 'content',
      },
    ]);
  }

  private getPosts(): void {
    const sub = this._httpClient
      .get<Array<PostsResponseDTO>>('/posts?_sort=created_at&_order=desc')
      .subscribe((responseDtos: Array<PostsResponseDTO>) => {
        this.posts = PostsModel.createList(responseDtos);
        this.tableModel.setRecords(this.posts);
        this.tableModel.reload();
      });
    this.subscription.add(sub);
  }

  public handleAdd(): void {
    this.router.navigate(['/posts/add']);
  }

  public handleEdit(post: PostsModel): void {
    this.router.navigate([`/posts/edit`], {
      queryParams: {
        id: post.id,
      },
    });
  }

  public handleView(post: PostsModel): void {
    this.router.navigate([`/posts/detail`], {
      queryParams: {
        id: post.id,
      },
    });
  }

  public handleDelete(post: PostsModel, position: number): void {
    const isTrue = false;
    console.log(position);
    console.log(post);
    if (!isTrue) return;
    this.globalService.modal.deleteConfirmation().subscribe((result) => {
      if (result) {
        this._deleteUsecase.execute(post.id).subscribe(() => {
          this.posts.splice(position, 1);
          this.globalService.toastService.showSuccess(
            `${this.moduleCode}.toast.success.delete`
          );
        });
      }
    });
  }
}
