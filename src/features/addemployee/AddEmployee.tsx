import React, { useState } from "react";
import { Form, Input, Button, Select, Alert } from "antd";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

/* eslint-enable no-template-curly-in-string */

const AddEmployee: React.FC = () => {
  const [showMsg, setShowMsg] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
    const empData = JSON.parse(localStorage.getItem("empInfo") || "{}");
    empData.push(values);
    localStorage.setItem("empInfo", JSON.stringify(empData));
    setShowMsg(true)
  };

  return (
    <>
      <div className="site-layout-content">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="group"
            label="Select Group"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select group!",
              },
            ]}
          >
            <Select placeholder="Please select a group">
              <Option value="Sales">Sales</Option>
              <Option value="IT">IT</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={"city"}
            label="City"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"salary"}
            label="Salary"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="selectmanager"
            label="Select Manager"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select manager!",
              },
            ]}
          >
            <Select placeholder="Please select a manager">
              <Option value="Manager1">Manager1</Option>
              <Option value="Manager2">Manager2</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {showMsg === true && <Alert message="Data submitted successfully" type="success" />}
      </div>
    </>
  );
};

export default AddEmployee;
