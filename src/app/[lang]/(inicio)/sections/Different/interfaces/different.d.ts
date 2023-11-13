import { LangInterface } from "@/src/app/constans/interfaces/langInterface";

export interface InfoCardProps {
  data: {
    id: number;
    descriptionEs: string;
    descriptionEn: string;
    color: number;
  }[];
  iconsDifferent: {
    iconId: number;
    iconComponent: JSX.Element;
  }[];
  lang: LangInterface | string;
}
