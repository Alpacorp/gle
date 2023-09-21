export interface SubMenuProps {
  idSub: number;
  linkSub: string;
  textSub: string;
  typeSub: string;
}

export interface ListProps {
  itemKey: number | string;
  text: string;
  link: string;
  submenu?: SubMenuProps[];
  idSub?: number;
  linkSub?: string;
  textSub?: string;
  isMobile?: boolean;
  lang?: string;
}
