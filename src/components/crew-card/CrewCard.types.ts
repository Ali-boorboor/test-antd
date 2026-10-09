import type { GlobalToken } from "antd";

type Variant = "OK" | "Warning" | "Info" | "Error";

export type Styles = Record<
  Variant,
  { backgroundColor: keyof GlobalToken; borderColor: keyof GlobalToken }
>;

export interface CrewCardProps {
  crewName: string;
  crewRole: string;
  avatarUrl?: string;
  variant?: Variant;
  className?: string;
  baseLocation: string;
  employeeCode: string;
}
