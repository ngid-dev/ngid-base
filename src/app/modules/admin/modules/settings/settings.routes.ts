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
      import('./modules/general/general.module').then(
        (m) => m.GeneralSettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.general.header',
    },
  },
  {
    path: 'discussion',
    loadChildren: () =>
      import('./modules/discussion/discussion.module').then(
        (m) => m.DiscussionSettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.discussion.header',
    },
  },
  {
    path: 'media',
    loadChildren: () =>
      import('./modules/media/media.module').then((m) => m.MediaSettingsModule),
    data: {
      breadcrumb: 'module.admin.module.settings.module.media.header',
    },
  },
  {
    path: 'permalinks',
    loadChildren: () =>
      import('./modules/permalinks/permalinks.module').then(
        (m) => m.PermalinksSettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.permalinks.header',
    },
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./modules/privacy/privacy.module').then(
        (m) => m.PrivacySettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.privacy.header',
    },
  },
  {
    path: 'reading',
    loadChildren: () =>
      import('./modules/reading/reading.module').then(
        (m) => m.ReadingSettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.reading.header',
    },
  },
  {
    path: 'writing',
    loadChildren: () =>
      import('./modules/writing/writing.module').then(
        (m) => m.WritingSettingsModule
      ),
    data: {
      breadcrumb: 'module.admin.module.settings.module.writing.header',
    },
  },
];
