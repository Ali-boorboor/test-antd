import { Drawer, Tabs } from "antd";
import type { ReactNode } from "react";

interface SidePanelTab {
  key: string;
  label: ReactNode;
  children: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

interface SidePanelTabsProps {
  tabs: SidePanelTab[];
  activeTabKey: string;
  open: boolean;
  onTabSelect: (key: string) => void;
  onClose: () => void;
}

export default function SidePanelTabs({
  tabs,
  activeTabKey,
  open,
  onTabSelect,
  onClose,
}: SidePanelTabsProps) {
  const activeTab = tabs.find((tab) => tab.key === activeTabKey);

  const tabItems = tabs.map(({ key, label, icon, disabled }) => ({
    key,
    label,
    icon,
    disabled,
  }));

  const handleTabClick = (key: string) => {
    onTabSelect(key);
  };

  return (
    <>
      <Tabs
        activeKey={activeTabKey}
        items={tabItems}
        onTabClick={handleTabClick}
        animated
        tabPlacement="end"
        tabBarGutter={8}
        size="small"
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1000,
          height: "100%",
        }}
      />

      <Drawer
        open={open}
        title={activeTab?.label}
        placement="right"
        size={520}
        onClose={onClose}
      >
        {activeTab?.children}
      </Drawer>
    </>
  );
}
