import { type IconName } from "@/components/ui/icon-picker";
export type Category = {
  categoryName: string;
  categorySummary: string;
  categoryProjectCount: number;
  categoryArticleCount: number;
  icon: IconName;
};
