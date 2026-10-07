import CrewCard from "#/components/CrewCard";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/crew-card")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex gap="medium" justify="center" align="center" className="min-h-svh">
      <CrewCard
        crewName="crewName"
        crewRole="crewRole"
        employeeCode="employeeCode"
        baseLocation="baseLocation"
        avatarUrl="/src/assets/pic.png"
        status="success"
      />
      <CrewCard
        crewName="crewName"
        crewRole="crewRole"
        employeeCode="employeeCode"
        baseLocation="baseLocation"
        avatarUrl="/src/assets/pic.png"
        status="warning"
      />
      <CrewCard
        crewName="crewName"
        crewRole="crewRole"
        employeeCode="employeeCode"
        baseLocation="baseLocation"
        avatarUrl="/src/assets/pic.png"
        status="error"
      />
    </Flex>
  );
}
