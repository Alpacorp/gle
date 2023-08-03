export interface SubMenuProps {
  idSub: number;
  linkSub: string;
  textSub: string;
  typeSub: string;
}

export interface ListProps {
  key: number;
  text: string;
  link: string;
  submenu?: SubMenuProps[];
  idSub?: number;
  linkSub?: string;
  textSub?: string;
}
