import Link from "gatsby-link";
import React from "react";
import ArticleListing from "../components/ArticleListing";

const IndexPage = () => (
  <article className="max-w-md leading-normal">
    <header className="mb-8">
      <h1>NeutralTone</h1>
      <p>UI Developer</p>
    </header>
    <p className="my-4">
      NeutralTone is a Norwich based multidisciplined software engineering
      studio ran by UI Developer{" "}
      <a href="https://tonyphipps.co.uk">Tony Phipps</a>.
    </p>
    <p className="my-4">
      Specialising in user interface development for web applications, we pride
      ourselves on delivering scalable and performant code with a well reasoned
      architecture.
    </p>
    <p className="my-4">
      If you are interested to see what we can do for you business we would love
      to have a chat, drop us an email at{" "}
      <a href="mailto:hello@neutraltone.com">hello@neutraltone.com</a> or head
      over to our <Link to="/contact">contact page</Link>.
    </p>
    <hr className="border-t my-12" />
    <aside>
      <ArticleListing />
    </aside>
  </article>
);

export default IndexPage;
