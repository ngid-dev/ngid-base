import { MenuResponseDTO } from './components/menu/menu.dto';

export class SidebarMenuModel {
  public name: string;
  public routerLink: string;
  public icon: string;
  public isExpanded: boolean;
  public childrens: Array<SidebarMenuModel>;
  private constructor() {}

  public static create(responseDTO: MenuResponseDTO): SidebarMenuModel {
    const model = new SidebarMenuModel();
    model.name = responseDTO.name;
    model.routerLink = responseDTO.routerLink;
    model.icon = responseDTO.icon || '';
    model.isExpanded = false;

    if (responseDTO.childrens) {
      model.childrens = responseDTO.childrens.map((children) =>
        SidebarMenuModel.create(children)
      );
    }

    return model;
  }
}
