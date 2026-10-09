import type { BadgeProps } from "antd";
import type { ReactNode } from "react";

export interface FilterChipProps {
  text: string;
  icon: ReactNode;
  disabled?: boolean;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
  color?: BadgeProps["color"];
}
