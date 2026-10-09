import { Avatar, Card, Flex, theme, Typography } from "antd";
import type { CrewCardProps, Styles } from "./CrewCard.types";

const styles: Styles = {
  OK: {
    backgroundColor: "colorSuccessBg",
    borderColor: "colorSuccessBorder",
  },
  Warning: {
    backgroundColor: "colorWarningBg",
    borderColor: "colorWarningBorder",
  },
  Info: {
    backgroundColor: "colorInfoBg",
    borderColor: "colorInfoBorder",
  },
  Error: {
    backgroundColor: "colorErrorBg",
    borderColor: "colorErrorBorder",
  },
};

export default function CrewCard({
  crewName,
  crewRole,
  avatarUrl,
  className,
  employeeCode,
  baseLocation,
  variant = "OK",
}: CrewCardProps) {
  const { token } = theme.useToken();

  const avatarFallback = crewName.slice(0, 2).toUpperCase();

  const style = styles[variant];

  return (
    <Card
      style={{
        backgroundColor: token[style.backgroundColor] as string,
        borderColor: token[style.borderColor] as string,
      }}
      className={className}
      variant="outlined"
      size="small"
      hoverable
    >
      <Flex align="center" gap={12}>
        <Avatar size={32} src={avatarUrl} alt={crewName}>
          {avatarFallback}
        </Avatar>

        <Flex style={{ textTransform: "capitalize" }} vertical>
          <Typography.Text strong>{crewName}</Typography.Text>

          <Typography.Text type="secondary">
            {crewRole} · {employeeCode.toUpperCase()} ·{" "}
            {baseLocation.toUpperCase()}
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
}
