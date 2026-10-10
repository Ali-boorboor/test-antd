import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import themeAntd from "#/theme/themeAntd";
import { ConfigProvider, Layout, Menu } from "antd";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

const items = [
  {
    key: 1,
    label: <Link to="/crew-card">crew card</Link>,
  },
  {
    key: 2,
    label: <Link to="/filter-chip">filter chip</Link>,
  },
  {
    key: 3,
    label: <Link to="/status-card">status card</Link>,
  },
  {
    key: 4,
    label: <Link to="/course">course</Link>,
  },
];

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ConfigProvider theme={themeAntd}>
          <Layout className="min-h-svh!">
            <Layout.Header style={{ padding: 0, position: "sticky", top: 0 }}>
              <Menu items={items} mode="horizontal" />
            </Layout.Header>
            {children}
          </Layout>
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </ConfigProvider>
        <Scripts />
      </body>
    </html>
  );
}
