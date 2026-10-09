import { Card, Flex, Progress, Tag, Typography, theme } from "antd";
import type { StatusCardProps, Styles } from "./StatusCard.types";

const styles: Styles = {
  OK: { progressColor: "green", tagColor: "green" },
  Warning: { progressColor: "gold", tagColor: "gold" },
  Info: { progressColor: "blue", tagColor: "blue" },
  Error: { progressColor: "volcano", tagColor: "volcano" },
};

export default function StatusCard({
  title,
  mainText,
  className,
  description,
  variant = "OK",
  progressPercent,
  badgeText = variant,
}: StatusCardProps) {
  const { token } = theme.useToken();

  const style = styles[variant];

  return (
    <Card
      style={{ minWidth: 200 }}
      className={className}
      variant="outlined"
      size="small"
    >
      <Flex vertical gap={2}>
        <Flex justify="space-between" align="center" gap={2}>
          <Typography.Text
            style={{ fontSize: token.fontSizeSM }}
            type="secondary"
          >
            {title}
          </Typography.Text>

          <Tag
            color={style.tagColor}
            variant="outlined"
            style={{
              fontWeight: 500,
            }}
          >
            {badgeText}
          </Tag>
        </Flex>

        <Typography>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {mainText}
          </Typography.Title>

          <Typography.Text
            style={{ fontSize: token.fontSizeSM }}
            type="secondary"
          >
            {description}
          </Typography.Text>
        </Typography>

        {progressPercent && (
          <Progress
            strokeColor={token[style.progressColor] as string}
            railColor={token.colorFillSecondary}
            percent={progressPercent}
            style={{ marginTop: 2 }}
            showInfo={false}
            size="small"
          />
        )}
      </Flex>
    </Card>
  );
}
