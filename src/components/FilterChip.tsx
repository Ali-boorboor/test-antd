import { Badge, Button, Flex, theme, Typography, type BadgeProps } from "antd";
import type { ReactNode } from "react";

interface FilterChipProps {
  text: string;
  icon: ReactNode;
  disabled?: boolean;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
  color?: BadgeProps["color"];
}

export default function FilterChip({
  icon,
  text,
  onClick,
  className,
  color = "blue",
  disabled = false,
  isSelected = false,
}: FilterChipProps) {
  const { token } = theme.useToken();

  return (
    <Button
      size="small"
      onClick={onClick}
      variant="outlined"
      disabled={disabled}
      className={className}
      style={{
        fontSize: token.fontSizeSM,
        opacity: isSelected ? 0.7 : 1,
        textDecoration: isSelected ? "line-through" : undefined,
      }}
    >
      <Flex align="center" gap={6}>
        <Badge color={color} dot />

        {icon}

        <Typography.Text style={{ fontSize: "inherit" }} strong>
          {text}
        </Typography.Text>
      </Flex>
    </Button>
  );
}
