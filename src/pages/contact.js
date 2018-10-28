import React from "react";

const ContactPage = () => (
  <form className="max-w-md" action="thank-you" data-netlify="true">
    <header className="mb-8">
      <h1>Contact NeutralTone</h1>
    </header>
    <p>
      We would love to have a chat about what we can do for your business, just
      fill out the contact form bellow or if you prefer, drop us an email at{" "}
      <a href="mailto:hello@neutraltone.com">hello@neutraltone.com</a>.
    </p>
    <hr className="border-t my-12" />
    <div className="mb-6">
      <label className="block font-bold mb-2 text-sm uppercase" htmlFor="name">
        What should we call you?
      </label>
      <input
        className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        id="name"
        name="name"
        type="text"
        placeholder="Terra Branford"
        required
      />
      {/* <span className="flex items-center mt-2 text-sm text-red italic">
        <svg
          className="mr-1 w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
        </svg>
        Please enter a name.
      </span> */}
    </div>
    <div className="mb-6">
      <label className="block font-bold mb-2 text-sm uppercase" htmlFor="name">
        What is your email address?
      </label>
      <input
        className="appearance-none block bg-grey-lighter p-3 rounded-md text-grey-darker w-full"
        id="email"
        name="email"
        type="email"
        placeholder="terrabranford@gmail.com"
        requred
      />
      {/* <span className="flex items-center mt-2 text-sm text-red italic">
        <svg
          className="mr-1 w-4 h-4 fill-current"
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
        className="block font-bold mb-2 text-sm uppercase"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className="appearance-none bg-grey-lighter p-4 rounded-md text-grey-darker w-full"
        placeholder="Say something..."
        rows="8"
        requred
      />
      {/* <span className="flex items-center mt-2 text-sm text-red italic">
        <svg
          className="mr-1 w-4 h-4 fill-current"
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
