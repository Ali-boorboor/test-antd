import { type EventType } from "#/constants/TimelineLegend";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CoffeeOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  MoonOutlined,
  ReadOutlined,
  SafetyOutlined,
  SendOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { Badge, Button, Flex, theme, Typography } from "antd";
import type { PresetColorKey } from "antd/es/theme/internal";
import type { ReactNode } from "react";

const EVENT_META: Record<
  EventType,
  {
    label: string;
    icon: ReactNode;
    color: PresetColorKey;
  }
> = {
  FDP: {
    label: "FDP",
    icon: <SendOutlined />,
    color: "blue",
  },
  SPLIT_DUTY: {
    label: "Split duty",
    icon: <SendOutlined />,
    color: "cyan",
  },
  REST: {
    label: "Rest",
    icon: <MoonOutlined />,
    color: "geekblue",
  },
  STANDBY: {
    label: "Standby",
    icon: <ClockCircleOutlined />,
    color: "gold",
  },
  AIRPORT_STANDBY: {
    label: "Airport standby",
    icon: <EnvironmentOutlined />,
    color: "green",
  },
  RESERVE: {
    label: "Reserve",
    icon: <SafetyOutlined />,
    color: "lime",
  },
  POSITIONING: {
    label: "Positioning",
    icon: <SwapOutlined />,
    color: "magenta",
  },
  OFF: {
    label: "Off",
    icon: <CalendarOutlined />,
    color: "orange",
  },
  VACATION: {
    label: "Vacation",
    icon: <CoffeeOutlined />,
    color: "pink",
  },
  TRAINING: {
    label: "Training",
    icon: <ReadOutlined />,
    color: "purple",
  },
  SICK: {
    label: "Sick",
    icon: <MedicineBoxOutlined />,
    color: "red",
  },
  ADMIN: {
    label: "Admin",
    icon: <FileTextOutlined />,
    color: "volcano",
  },
};

interface TimelineButtonProps {
  activityType: EventType;
  isSelected?: boolean;
}

export default function ActivityTypeLegend({
  activityType,
  isSelected,
}: TimelineButtonProps) {
  const { token } = theme.useToken();

  const { color, icon, label } = EVENT_META[activityType];

  return (
    <Button
      size="small"
      variant="outlined"
      style={{
        fontSize: token.fontSizeSM,
        opacity: isSelected ? 0.6 : 1,
        textDecoration: isSelected ? "line-through" : undefined,
      }}
    >
      <Flex align="center" gap={6}>
        <Badge color={color} dot />

        {icon}

        <Typography.Text style={{ fontSize: "inherit" }} strong>
          {label}
        </Typography.Text>
      </Flex>
    </Button>
  );
}
