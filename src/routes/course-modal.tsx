import Dialog from "#/components/dialog";
import { PlusCircleOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";
import {
  Button,
  Flex,
  Form,
  Input,
  Layout,
  Segmented,
  Select,
  theme,
  Typography,
  type FormProps,
} from "antd";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/course-modal")({
  component: RouteComponent,
});

type FieldType = {
  courseName: string;
  department: string;
  description?: string;
  applicability: string;
  remark?: string;
  validity: string;
  validityUnit?: ValidityUnit;
  initial?: number;
  recurrent?: number;
};
type ValidityUnit = "D" | "M" | "Y";

const GAP = 4;

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Label({ children }: { children: ReactNode }) {
  return (
    <Typography.Text style={{ fontSize: 13 }} strong>
      {children}
    </Typography.Text>
  );
}

function RouteComponent() {
  const { token } = theme.useToken();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: token.colorBgContainer,
        }}
      >
        <Flex justify="flex-end" align="center" style={{ height: "100%" }}>
          <Button
            type="primary"
            shape="circle"
            onClick={showModal}
            icon={<PlusCircleOutlined />}
          />
        </Flex>
      </Layout.Header>

      <Dialog
        headerTitle="Add New Course"
        onCancel={handleCancel}
        open={isModalOpen}
        onOk={handleOk}
        footer={
          <Flex justify="flex-end" gap={GAP}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ flex: 1, fontWeight: 700 }}
            >
              Create
            </Button>

            <Button style={{ flex: 1, fontWeight: 700 }} onClick={handleCancel}>
              Cancel
            </Button>
          </Flex>
        }
      >
        <Form
          id="form"
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          labelAlign="left"
          requiredMark={(component, props) => (
            <>
              {component}
              {props.required && (
                <Typography.Text type="danger" style={{ marginLeft: GAP }}>
                  *
                </Typography.Text>
              )}
            </>
          )}
        >
          <Form.Item<FieldType>
            label={<Label>Course Name</Label>}
            name="courseName"
            required
          >
            <Input placeholder="Course Name" />
          </Form.Item>

          <Form.Item<FieldType>
            name="department"
            label={<Label>Department</Label>}
            required
          >
            <Select
              showSearch
              allowClear
              placeholder="Select a Department"
              options={[
                { label: "Training", value: "training" },
                { label: "Checking", value: "checking" },
                { label: "Ground Training", value: "Ground Training" },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Description</Label>}
            name="description"
          >
            <Input placeholder="Description" />
          </Form.Item>

          <Form.Item<FieldType>
            name="applicability"
            label={<Label>Applicability</Label>}
            required
          >
            <Select
              allowClear
              placeholder="Select a Applicability"
              mode="multiple"
              options={[
                { label: "CPT", value: "CPT" },
                { label: "FO", value: "FO" },
                { label: "SCCM", value: "SCCM" },
                { label: "CCM", value: "CCM" },
              ]}
            />
          </Form.Item>

          <Form.Item<FieldType> label={<Label>Remark</Label>} name="remark">
            <Input.TextArea
              rows={1}
              style={{ maxHeight: 100 }}
              placeholder="Remark"
            />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Validity</Label>}
            style={{ position: "relative" }}
            name="validity"
            required
          >
            <Input placeholder="Validity" maxLength={4} />

            <Form.Item<FieldType> name="validityUnit" initialValue="D" noStyle>
              <Segmented<ValidityUnit>
                style={{
                  height: "fit-content",
                  position: "absolute",
                  margin: "auto",
                  bottom: 0,
                  right: 4,
                  top: 0,
                }}
                options={["D", "M", "Y"]}
                shape="round"
                size="small"
              />
            </Form.Item>
          </Form.Item>

          <Form.Item<FieldType> label={<Label>Initial</Label>} name="initial">
            <Input placeholder="Initial" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Recurrent</Label>}
            name="recurrent"
          >
            <Input placeholder="Recurrent" />
          </Form.Item>
        </Form>
      </Dialog>
    </Layout>
  );
}
