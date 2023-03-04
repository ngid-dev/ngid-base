import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';
import { DeleteUsecase } from './delete.usecase';
import { PostsResponseDTO } from './shared/dtos';
import { PostsModel } from './shared/models';

@Component({
  templateUrl: './posts.component.html',
})
export class PostsComponent extends BaseModule {
  public posts: Array<PostsModel>;
  constructor(
    private _httpClient: HttpClient,
    private _deleteUsecase: DeleteUsecase
  ) {
    super('module.admin.module.posts');
  }

  protected onInit(): void {
    this.getPosts();
    this.setStateReady();
  }

  private getPosts(): void {
    this._httpClient
      .get<Array<PostsResponseDTO>>('/posts?_sort=created_at&_order=desc')
      .subscribe((responseDtos: Array<PostsResponseDTO>) => {
        this.posts = PostsModel.createList(responseDtos);
      });
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
