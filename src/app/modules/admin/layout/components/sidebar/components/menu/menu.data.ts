import { MenuResponseDTO } from './menu.dto';

export const menus: Array<MenuResponseDTO> = [
  {
    name: 'Dashboard',
    routerLink: '/dashboard',
    icon: 'fas fa-dashboard',
  },
  {
    name: 'Posts',
    routerLink: '/posts',
    icon: 'fas fa-pen',
    childrens: [
      {
        name: 'All Posts',
        routerLink: '/posts',
      },
      {
        name: 'Categories',
        routerLink: '/posts/categories',
      },
      {
        name: 'Tags',
        routerLink: '/posts/tags',
      },
    ],
  },
  {
    name: 'Media',
    routerLink: '/media',
    icon: 'fas fa-photo-film',
  },
  {
    name: 'Pages',
    routerLink: '/pages',
    icon: 'fas fa-file',
  },
  {
    name: 'Comments',
    routerLink: '/comments',
    icon: 'fas fa-comments',
  },
  {
    name: 'Appearance',
    routerLink: '/appearance',
    icon: 'fas fa-palette',
    childrens: [
      {
        name: 'Themes',
        routerLink: '/appearance/themes',
      },
      {
        name: 'Widgets',
        routerLink: '/appearance/widgets',
      },
      {
        name: 'Menus',
        routerLink: '/appearance/menus',
      },
    ],
  },
  {
    name: 'Plugins',
    routerLink: '/plugins',
    icon: 'fas fa-plug',
  },
  {
    name: 'Users',
    routerLink: '/users',
    icon: 'fas fa-users',
  },
  {
    name: 'Tools',
    routerLink: '/tools',
    icon: 'fas fa-tools',
    childrens: [
      {
        name: 'Available Tools',
        routerLink: '/tools/available-tools',
      },
      {
        name: 'Import',
        routerLink: '/tools/import',
      },
      {
        name: 'Export',
        routerLink: '/tools/export',
      },
    ],
  },
  {
    name: 'Settings',
    routerLink: '/settings',
    icon: 'fas fa-toolbox',
    childrens: [
      {
        name: 'General',
        routerLink: '/settings/general',
      },
      {
        name: 'Writing',
        routerLink: '/settings/writing',
      },
      {
        name: 'Reading',
        routerLink: '/settings/reading',
      },
      {
        name: 'Discussion',
        routerLink: '/settings/discussion',
      },
      {
        name: 'Media',
        routerLink: '/settings/media',
      },
      {
        name: 'Permalinks',
        routerLink: '/settings/permalinks',
      },
      {
        name: 'Privacy',
        routerLink: '/settings/privacy',
      },
    ],
  },
];
