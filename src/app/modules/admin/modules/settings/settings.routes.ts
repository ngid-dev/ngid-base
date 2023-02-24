import { Routes } from '@angular/router';

export const settingsRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'general',
  },
  {
    path: 'general',
    loadChildren: () =>
      import('./modules/general/general.module').then((m) => m.GeneralModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.general.header',
    },
  },
  {
    path: 'discussion',
    loadChildren: () =>
      import('./modules/discussion/discussion.module').then(
        (m) => m.DiscussionModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.discussion.header',
    },
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./modules/media/media.module').then((m) => m.MediaModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.media.header',
    },
  },
  {
    path: 'permalinks',
    loadChildren: () =>
      import('./modules/permalinks/permalinks.module').then(
        (m) => m.PermalinksModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.permalinks.header',
    },
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./modules/privacy/privacy.module').then((m) => m.PrivacyModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.privacy.header',
    },
  },
  {
    path: 'reading',
    loadChildren: () =>
      import('./modules/reading/reading.module').then((m) => m.ReadingModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.reading.header',
    },
  },
  {
    path: 'writing',
    loadChildren: () =>
      import('./modules/writing/writing.module').then((m) => m.WritingsModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.writing.header',
    },
  },
];
