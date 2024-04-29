import { FC } from "react";

import { ContactForm } from "@/components";

const ContactsPage: FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Management of contacts</h1>
      <ContactForm />
    </div>
  );
};

export default ContactsPage;
