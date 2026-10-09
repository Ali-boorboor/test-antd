import CrewCard from "#/components/crew-card";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/crew-card")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex gap="medium" justify="center" align="center" className="flex-1">
      <CrewCard
        variant="OK"
        baseLocation="SYZ"
        employeeCode="CRW-001"
        crewName="ali boorboor"
        crewRole="first officer"
        avatarUrl="/src/assets/pic.png"
      />

      <CrewCard
        variant="Warning"
        baseLocation="SYZ"
        employeeCode="CRW-001"
        crewName="ali boorboor"
        crewRole="first officer"
        avatarUrl="/src/assets/pic.png"
      />

      <CrewCard
        variant="Info"
        baseLocation="SYZ"
        employeeCode="CRW-001"
        crewName="ali boorboor"
        crewRole="first officer"
        avatarUrl="/src/assets/pic.png"
      />

      <CrewCard
        variant="Error"
        baseLocation="SYZ"
        employeeCode="CRW-001"
        crewName="ali boorboor"
        crewRole="first officer"
        avatarUrl="/src/assets/pic.png"
      />
    </Flex>
  );
}
