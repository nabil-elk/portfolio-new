
import React from "react";
import { Container, Head, Preview, Html} from "@react-email/components";


type ContactFormEmailProps = {
  msg: string;
  sender: string;
};

export const ContactFormEmail = ({
  msg,
  sender,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    
    <body className="bg-gray-100 text-black">
  <Container>
  <section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
    <h2 className="leading-tight">You received the following message from the contact form</h2>
    <p>{msg}</p>
    <hr />
    <p>The sender's email is: {sender}</p>
  </section>
  </Container>
  </body>
  
  </Html>
  
) 


export default ContactFormEmail;
