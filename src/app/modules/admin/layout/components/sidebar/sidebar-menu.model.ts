import { MenuResponseDTO } from './components/menu/menu.dto';

export class SidebarMenuModel {
  public name: string;
  public routerLink: string;
  public icon: string;
  public isExpanded: boolean;
  public childrens: Array<SidebarMenuModel>;
  private constructor() {}

  public collapsed(): void {
    this.isExpanded = false;
    const hasChildrens = this.childrens && this.childrens.length > 0;
    if (!hasChildrens) return;
    this.childrens.forEach((children) => children.collapsed());
  }

  public static create(
    responseDTO: MenuResponseDTO,
    currentRouterUrl: string
  ): SidebarMenuModel {
    const model = new SidebarMenuModel();
    model.name = responseDTO.name;
    model.routerLink = responseDTO.routerLink;
    model.icon = responseDTO.icon || '';

    model.isExpanded = currentRouterUrl.includes(responseDTO.routerLink);

    if (responseDTO.childrens) {
      model.childrens = responseDTO.childrens.map((children) =>
        SidebarMenuModel.create(children, currentRouterUrl)
      );
    }

    return model;
  }
}
