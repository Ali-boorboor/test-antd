import { Avatar, Card, Flex, Typography, theme } from "antd";
import type { CSSProperties } from "react";

type CrewStatus = "warning" | "error" | "success";

type AntdToken = ReturnType<typeof theme.useToken>["token"];

type GetStatusStyle = (token: AntdToken) => Record<CrewStatus, CSSProperties>;

interface CrewCardProps {
  crewName: string;
  crewRole: string;
  employeeCode: string;
  baseLocation: string;
  avatarUrl?: string;
  status?: CrewStatus;
  className?: string;
}

const getStatusStyle: GetStatusStyle = (token) => ({
  warning: {
    backgroundColor: token.colorWarningBg,
    borderColor: token.colorWarningBorder,
  },
  error: {
    backgroundColor: token.colorErrorBg,
    borderColor: token.colorErrorBorder,
  },
  success: {
    backgroundColor: token.colorSuccessBg,
    borderColor: token.colorSuccessBorder,
  },
});

export default function CrewCard({
  crewName,
  crewRole,
  employeeCode,
  baseLocation,
  avatarUrl,
  status,
  className,
}: CrewCardProps) {
  const { token } = theme.useToken();

  const statusStyle = getStatusStyle(token);

  const avatarFallback = crewName.slice(0, 2).toUpperCase();

  return (
    <Card
      style={status && statusStyle[status]}
      className={className}
      variant="outlined"
      size="small"
      hoverable
    >
      <Flex align="center" gap={12}>
        <Avatar size={32} src={avatarUrl} alt={crewName}>
          {avatarFallback}
        </Avatar>

        <Flex vertical>
          <Typography.Text strong>{crewName}</Typography.Text>

          <Typography.Text type="secondary">
            {crewRole} · {employeeCode} · {baseLocation}
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
}
