export class SidebarMenuModel {
  name: string;
  routerLink: string;
  icon?: string;
  isExpanded?: boolean;
  childrens?: Array<SidebarMenuModel>;
}
