import Head from 'next/head';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta title="description" content="Send Me Your Messages!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
