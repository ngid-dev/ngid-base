import { Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./modules/add/add.module').then((m) => m.AddModule),
    data: {
      breadcrumb: 'module.admin.module.posts.module.add.header',
    },
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./modules/add/add.module').then((m) => m.AddModule),
    data: {
      breadcrumb: 'module.admin.module.posts.module.edit.header',
    },
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./modules/add/add.module').then((m) => m.AddModule),
    data: {
      breadcrumb: 'module.admin.module.posts.module.detail.header',
      isView: true,
    },
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
