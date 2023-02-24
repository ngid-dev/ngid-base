export class MenuResponseDTO {
  name: string;
  routerLink: string;
  icon?: string;
  childrens?: Array<MenuResponseDTO>;
}
