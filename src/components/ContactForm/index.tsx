import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Form, Input, Button, Select, DatePicker } from "antd";

import { addContact } from "@/store/slice";
import { HealthStatus, IContact } from "@/modules/interfaces";

const initialState: IContact = {
  id: "",
  firstName: "",
  lastName: "",
  birthDate: "",
  email: "",
  address: "",
  healthStatus: HealthStatus.Healthy,
};

const ContactForm: FC = () => {
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState<IContact>(initialState);
  const [form] = Form.useForm();

  const handleChange = (
    name: string,
    value: string | HealthStatus | undefined
  ) => {
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (values: IContact) => {
    dispatch(addContact(values));
    form.setFieldsValue({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      healthStatus: HealthStatus.Healthy,
    });
    setContactData(initialState);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      initialValues={contactData}
      className="mb-4"
    >
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Input
          value={contactData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: "Please enter last name" }]}
      >
        <Input
          value={contactData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Birth date"
        name="birthDate"
        rules={[{ required: true, message: "Please enter birth date" }]}
      >
        <DatePicker
          value={
            contactData.birthDate ? moment(contactData.birthDate) : undefined
          }
          onChange={(date) =>
            handleChange("birthDate", date ? date.format("YYYY-MM-DD") : "")
          }
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter email" }]}
      >
        <Input
          type="email"
          value={contactData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter address" }]}
      >
        <Input
          value={contactData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Health status"
        name="healthStatus"
        rules={[{ required: true, message: "Please select health status" }]}
      >
        <Select
          value={contactData.healthStatus}
          onChange={(value) =>
            handleChange("healthStatus", value as HealthStatus)
          }
        >
          <Select.Option value={HealthStatus.Healthy}>
            {HealthStatus.Healthy}
          </Select.Option>
          <Select.Option value={HealthStatus.Infected}>
            {HealthStatus.Infected}
          </Select.Option>
          <Select.Option value={HealthStatus.Recovered}>
            {HealthStatus.Recovered}
          </Select.Option>
          <Select.Option value={HealthStatus.Deceased}>
            {HealthStatus.Deceased}
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add contact
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
