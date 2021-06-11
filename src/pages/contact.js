import React from "react";

const ContactPage = () => (
  <form
    name="contact"
    method="POST"
    action="/thank-you"
    data-netlify="true"
    className="max-w-md"
  >
    <header className="mb-8">
      <h1>Contact NeutralTone</h1>
    </header>
    <p>
      We would love to have a chat about what we can do for your business, just
      fill out the contact form below or if you prefer, drop us an email at{" "}
      <a href="mailto:hello@neutraltone.com">hello@neutraltone.com</a>.
    </p>
    <hr className="my-12 border-t" />
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />
    <div className="mb-6">
      <label className="block mb-2 text-sm font-bold uppercase" htmlFor="name">
        What should we call you?
      </label>
      <input
        className="block w-full p-3 rounded-md appearance-none bg-grey-lighter text-grey-darker"
        id="name"
        name="name"
        type="text"
        placeholder="Terra Branford"
        required
      />
      {/* <span className="flex items-center mt-2 text-sm italic text-red">
        <svg
          className="w-4 h-4 mr-1 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
        </svg>
        Please enter a name.
      </span> */}
    </div>
    <div className="mb-6">
      <label className="block mb-2 text-sm font-bold uppercase" htmlFor="name">
        What is your email address?
      </label>
      <input
        className="block w-full p-3 rounded-md appearance-none bg-grey-lighter text-grey-darker"
        id="email"
        name="email"
        type="email"
        placeholder="terrabranford@gmail.com"
        required
      />
      {/* <span className="flex items-center mt-2 text-sm italic text-red">
        <svg
          className="w-4 h-4 mr-1 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
        </svg>
        Please enter an email address.
      </span> */}
    </div>
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-bold uppercase"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="w-full p-4 rounded-md appearance-none bg-grey-lighter text-grey-darker"
        placeholder="Say something..."
        rows="8"
        required
      />
      {/* <span className="flex items-center mt-2 text-sm italic text-red">
        <svg
          className="w-4 h-4 mr-1 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
        </svg>
        Please enter a Message.
      </span> */}
    </div>
    <div className="mb-6">
      <div data-netlify-recaptcha />
    </div>
    <button className="px-8 py-4 bg-black text-grey-lighter">Submit</button>
  </form>
);

export default ContactPage;
