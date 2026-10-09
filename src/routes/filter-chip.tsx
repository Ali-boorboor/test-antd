import FilterChip from "#/components/filter-chip";
import { MoonOutlined, SendOutlined, SunOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";
import { useState } from "react";

export const Route = createFileRoute("/filter-chip")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isButton1Selected, setIsButton1Selected] = useState(false);
  const [isButton2Selected, setIsButton2Selected] = useState(false);
  const [isButton3Selected, setIsButton3Selected] = useState(false);

  return (
    <Flex gap="medium" justify="center" align="center" className="flex-1">
      <FilterChip
        text="FDP"
        color="cyan"
        icon={<SendOutlined />}
        isSelected={isButton1Selected}
        onClick={() => setIsButton1Selected((prevValue) => !prevValue)}
      />

      <FilterChip
        text="FTL"
        color="blue"
        icon={<SunOutlined />}
        isSelected={isButton2Selected}
        onClick={() => setIsButton2Selected((prevValue) => !prevValue)}
      />

      <FilterChip
        text="Duty"
        color="magenta"
        icon={<MoonOutlined />}
        isSelected={isButton3Selected}
        onClick={() => setIsButton3Selected((prevValue) => !prevValue)}
      />
    </Flex>
  );
}
