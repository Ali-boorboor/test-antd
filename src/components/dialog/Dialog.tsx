import { CloseOutlined } from "@ant-design/icons";
import { Modal, theme, Typography } from "antd";
import type { DialogProps } from "./Dialog.types";

export default function Dialog({
  headerTitle,
  children,
  ...props
}: DialogProps) {
  const { token } = theme.useToken();

  return (
    <Modal
      styles={{
        container: { padding: 0, overflow: "hidden" },

        footer: {
          margin: 0,
          padding: 10,
          backgroundColor: token.colorFillContent,
        },

        body: { padding: 10 },

        header: {
          backgroundColor: token.colorPrimary,
          padding: token.padding,
          margin: 0,
        },
      }}

      closeIcon={<CloseOutlined style={{ color: token.colorPrimaryBg }} />}

      title={
        <Typography
          style={{
            color: token.colorPrimaryBg,
            fontWeight: 700,
          }}
          component="p"
        >
          {headerTitle}
        </Typography>
      }

      mask={{ closable: false }}

      {...props}
    >
      {children}
    </Modal>
  );
}
