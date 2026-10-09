import type { GlobalToken, TagProps } from "antd";

type Variant = "OK" | "Warning" | "Info" | "Error";

export type Styles = Record<
  Variant,
  { progressColor: keyof GlobalToken; tagColor: TagProps["color"] }
>;

export interface StatusCardProps {
  title: string;
  mainText: string;
  variant?: Variant;
  className?: string;
  badgeText?: string;
  description: string;
  progressPercent?: number;
}
