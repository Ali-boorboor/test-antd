import CrewCard from "#/components/CrewCard";
import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb, Flex, Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

export const Route = createFileRoute("/")({ component: Home });

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

function Home() {
  return (
    <Layout className="min-h-svh!">
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider collapsible width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={items}
          />
        </Sider>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
          />
          <Flex gap="medium" justify="center">
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
        </Content>
      </Layout>
      <Footer className="text-center">Ant Design Created by Ant UED</Footer>
    </Layout>
  );
}
