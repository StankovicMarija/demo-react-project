import React from 'react';

function Corm() {
  return (
    <Form>
      <div className={classes.input}>
       
        {/* <InputField */}
        <input
          // ref={nameInputRef}
          id="name"
          type="text"
          // value={name}
          placeholder="Name"
          // onChange={handleNameChange}
          className={classes.input}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        {/* <InputField */}
        <input
          id="email"
          type="text"
          // value={email}
          placeholder="Email Address"
          // onChange={handleEmailChange}
          className={classes.input}
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name</label>
        {/* <InputField */}
        <input
          id="companyName"
          type="text"
          // value={companyName}
          placeholder="Company Name"
          // onChange={handleCompanyNameChange}
          className={classes.input}
        />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        {/* <InputField */}
        <input
          id="title"
          type="text"
          // value={title}
          placeholder="Title"
          // onChange={handleTitleChange}
          className={classes.input}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        {/* <InputField */}
        <input
          id="message"
          type="text"
          // value={message}
          placeholder="Message"
          // onChange={handleMessageChange}
          className={classes.input}
        />
      </div>
      <div>
        <label htmlFor="subscribe">
          Stay up-to-date with company announcements and updates to our API
        </label>
        {/* <InputField */}
        <input
          id="subscribe"
          type="checkbox"
          // value={subscribe}
          // onChange={handleSubscribeChange}
          className={classes.input}
        />
      </div>

      <Button variant="light">Submit</Button>
    </Form>
  );
}

export default Corm;
