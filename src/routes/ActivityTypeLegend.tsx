import ActivityTypeLegend from "#/components/ActivityTypeLegend";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/ActivityTypeLegend")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex gap="medium" justify="center" align="center" className="min-h-svh">
      <ActivityTypeLegend activityType="FDP" />

      <ActivityTypeLegend activityType="POSITIONING" isSelected />
    </Flex>
  );
}
