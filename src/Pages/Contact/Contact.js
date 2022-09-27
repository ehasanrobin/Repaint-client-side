import React from "react";
import Footer from "../Shared/Footer";
import PageTitle from "../Shared/PageTitle";
import Info from "./Info";
import MailForm from "./MailForm";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact Us"></PageTitle>
      <Info></Info>
      <MailForm></MailForm>
      <Footer></Footer>
    </>
  );
};

export default Contact;
