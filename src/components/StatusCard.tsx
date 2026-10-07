import {
  Card,
  Flex,
  Progress,
  Tag,
  Typography,
  theme,
  type TagProps,
} from "antd";
import type { GlobalToken } from "antd/es/theme/internal";

type Variant = "OK" | "Warning" | "Info";

type Styles = Record<
  Variant,
  { progressColor: keyof GlobalToken; tagColor: TagProps["color"] }
>;

interface StatusCardProps {
  title: string;
  mainText: string;
  variant?: Variant;
  className?: string;
  description: string;
  progressPercent?: number;
  badgeText?: string;
}

const styles: Styles = {
  OK: { progressColor: "green", tagColor: "green" },
  Warning: { progressColor: "colorWarning", tagColor: "yellow" },
  Info: { progressColor: "blue", tagColor: "blue" },
};

export default function StatusCard({
  title,
  mainText,
  variant = "OK",
  badgeText = variant,
  description,
  progressPercent,
  className,
}: StatusCardProps) {
  const { token } = theme.useToken();

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
            color={styles[variant].tagColor}
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
            strokeColor={token[styles[variant].progressColor] as string}
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
