import React, { useEffect, useState } from 'react';
import classes from './ContactForm.module.css';
import Notification from '../ui/Notification';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something Went Wrong!');
  }
};

const ContactForm = () => {
  const [messageInfo, setMessageInfo] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [requestState, setRequestState] = useState(null);
  const [requestError, setRequestError] = useState(null);

  useEffect(() => {
    if (requestState === 'success' || requestState === 'error') {
      const timer = setTimeout(() => {
        setRequestState(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestState]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setRequestState('pending');

    try {
      const response = await sendContactData(messageInfo);
      setRequestState('success');
    } catch (error) {
      setRequestState('error');
      setRequestError(error.message);
    }
  };

  let notification;

  if (requestState === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending Message...',
      message: "You Message Is On It's Way",
    };
  }

  if (requestState === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Your Message Was Sent Successfully!',
    };
  }

  if (requestState === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help You?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={messageInfo.email}
              onInput={({ target }) =>
                setMessageInfo((oldMessageInfo) => ({
                  ...oldMessageInfo,
                  email: target.value,
                }))
              }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={messageInfo.name}
              onChange={({ target }) => {
                setMessageInfo((oldMessageInfo) => ({
                  ...oldMessageInfo,
                  name: target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows="5"
            id="message"
            required
            value={messageInfo.message}
            onChange={({ target }) =>
              setMessageInfo((oldMessageInfo) => ({
                ...oldMessageInfo,
                message: target.value,
              }))
            }
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
