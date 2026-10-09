import StatusCard from "#/components/status-card";
import { createFileRoute } from "@tanstack/react-router";
import { Flex } from "antd";

export const Route = createFileRoute("/status-card")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 grid place-content-center gap-4">
      <Flex gap="medium" justify="center" align="center">
        <StatusCard
          description="of 60h in 7 days"
          mainText="37h 30m"
          title="Duty hours"
          variant="OK"
          badgeText="+1%"
          progressPercent={20}
        />

        <StatusCard
          description="of 100h in 28 days"
          mainText="71h 40m"
          title="Flight hours"
          variant="Info"
          progressPercent={60}
        />

        <StatusCard
          description="in selected week"
          mainText="3 FDP"
          title="FDP count"
          variant="Warning"
          progressPercent={100}
        />

        <StatusCard
          description="in selected week"
          mainText="3 FDP"
          title="FDP count"
          variant="Error"
          progressPercent={100}
        />
      </Flex>

      <Flex gap="medium" justify="center" align="center">
        <StatusCard
          description="first rest in range"
          mainText="6h 30m"
          title="Next rest"
          variant="OK"
        />

        <StatusCard
          description="in selected week"
          mainText="3 FDP"
          title="FDP count"
          variant="Info"
        />

        <StatusCard
          description="monthly minimum"
          mainText="6 / 7"
          title="Days off"
          variant="Warning"
        />

        <StatusCard
          description="monthly minimum"
          mainText="6 / 7"
          title="Days off"
          variant="Error"
        />
      </Flex>
    </div>
  );
}
