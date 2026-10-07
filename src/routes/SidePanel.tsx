import SidePanelTabs from "#/components/Test";
import { AppleOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";
import { Empty } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/SidePanel")({
  component: RouteComponent,
});

export default function RouteComponent() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const [activeTabKey, setActiveTabKey] = useState("detail");

  const tabs = [
    {
      key: "detail",
      label: "Detail",
      children: <div>Crew detail content</div>,
      icon: <AppleOutlined />,
    },
    {
      key: "courses",
      label: "Courses",
      children: <Empty description="No Item" />,
      icon: <AppleOutlined />,
    },
    {
      key: "attachment",
      label: "Attachment",
      children: <div>Attachment content</div>,
      icon: <AppleOutlined />,
    },
  ];

  const handleTabSelect = (key: string) => {
    setActiveTabKey(key);
    setIsPanelOpen(true);
  };

  const handlePanelClose = () => {
    setIsPanelOpen(false);
  };

  return (
    <SidePanelTabs
      tabs={tabs}
      activeTabKey={activeTabKey}
      open={isPanelOpen}
      onTabSelect={handleTabSelect}
      onClose={handlePanelClose}
    />
  );
}
