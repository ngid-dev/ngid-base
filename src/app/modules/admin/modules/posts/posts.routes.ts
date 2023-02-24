import { Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
    data: {
      breadcrumb: 'module.admin.module.posts.module.categories.header',
    },
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./modules/tags/tags.module').then((m) => m.TagsModule),
    data: {
      breadcrumb: 'module.admin.module.posts.module.tags.header',
    },
  },
];
