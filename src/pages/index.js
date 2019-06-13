import Link from "gatsby-link";
import React from "react";

const IndexPage = () => (
  <article className="max-w-md leading-normal">
    <header className="mb-8">
      <h1>NeutralTone</h1>
      <p>UI Development Studio</p>
    </header>
    <p className="my-4">
      NeutralTone is a Norwich based multidiscipline distributed software
      engineering team run by UI Developer,{" "}
      <a href="https://tonyphipps.co.uk">Tony Phipps</a>.
    </p>
    <p className="my-4">
      Specialising in user interface development for web applications, we pride
      ourselves on delivering scalable and performant code with a rational
      architecture.
    </p>
    <p className="my-4">
      If you're interested in seeing what we can do for your business we would
      love to have a chat, drop us an email at{" "}
      <a href="mailto:hello@neutraltone.com">hello@neutraltone.com</a> or head
      over to our <Link to="/contact">contact page</Link>.
    </p>
    {/* <hr className="border-t my-12" />
    <aside>
      <ArticleListing />
    </aside> */}
  </article>
);

export default IndexPage;
