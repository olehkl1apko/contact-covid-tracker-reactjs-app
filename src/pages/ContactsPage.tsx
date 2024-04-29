import { FC } from "react";

import { ContactForm, ContactList } from "@/components";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ContactsPage: FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Management of contacts</h1>
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
