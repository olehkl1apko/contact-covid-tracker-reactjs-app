import { FC } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import { removeContact } from "@/store/slice";
import { IContact } from "@/modules/interfaces";
import { Button, Card } from "antd";

interface ContactsProps {
  contacts: IContact[];
}

const ContactList: FC<ContactsProps> = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2 ">Contact list</h2>
      {contacts && contacts.length > 0 && (
        <div className="grid grid-cols-1 large:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <Card
              key={contact.id}
              title={`${contact.firstName} ${contact.lastName}`}
              bordered={true}
              className="flex flex-col gap-4 min-w-[300px] justify-between bg-blue-100"
              actions={[
                <Link key="update" to={`/contacts/edit/${contact.id}`}>
                  <Button type="primary">Update</Button>
                </Link>,
                <Button
                  key="delete"
                  type="primary"
                  danger={true}
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>,
              ]}
            >
              <p className="whitespace-nowrap">Email: {contact.email}</p>
              <p>
                Birth Date: {moment(contact.birthDate).format("YYYY-MM-DD")}
              </p>
              <p className="whitespace-pre-wrap">Address: {contact.address}</p>
              <p>Health Status: {contact.healthStatus}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
