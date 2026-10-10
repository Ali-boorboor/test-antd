import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";
import {
  Button,
  Flex,
  Form,
  Input,
  Layout,
  Modal,
  Segmented,
  Select,
  theme,
  Typography,
  type FormProps,
} from "antd";
import { useState, type ReactNode } from "react";

export const Route = createFileRoute("/course")({
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = theme.useToken();

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
      <Modal
        footer={
          <Flex justify="flex-end" gap={GAP}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ flex: 1, fontWeight: 700 }}
            >
              Create Course
            </Button>

            <Button onClick={handleCancel} style={{ flex: 1, fontWeight: 700 }}>
              Cancel
            </Button>
          </Flex>
        }
        styles={{
          container: { padding: 0, overflow: "hidden" },
          footer: {
            margin: 0,
            padding: 10,
            backgroundColor: token.colorFillContent,
          },
          body: { padding: 10 },
          header: {
            backgroundColor: token.colorPrimary,
            padding: token.padding,
            margin: 0,
          },
        }}
        closeIcon={<CloseOutlined style={{ color: token.colorPrimaryBg }} />}
        onOk={handleOk}
        open={isModalOpen}
        title={
          <Typography
            style={{
              color: token.colorPrimaryBg,
              fontWeight: 700,
            }}
            component="p"
          >
            Add New Course
          </Typography>
        }
        onCancel={handleCancel}
        mask={{ closable: false }}
      >
        <Form
          name="basic"
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
            rules={[
              { required: true, message: "Please input your course name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="department"
            label={<Label>Department</Label>}
            rules={[{ required: true }]}
          >
            <Select
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
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="applicability"
            label={<Label>Applicability</Label>}
            rules={[{ required: true }]}
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
            <Input.TextArea rows={1} style={{ maxHeight: 100 }} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Validity</Label>}
            name="validity"
            rules={[{ required: true, message: "Please enter a number" }]}
            style={{ position: "relative" }}
          >
            <Input />

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
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Recurrent</Label>}
            name="recurrent"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}
