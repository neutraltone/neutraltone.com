import Link from "gatsby-link";
import React from "react";

const NotFoundPage = () => (
  <div className="max-w-md">
    <header className="mb-8">
      <h1>404 Page Not Found</h1>
    </header>
    <p>
      It appears the that the page you are looking has been lost to the void. If
      you are looking to contact us, please head over to the{" "}
      <Link to="/contact" className="no-underline">
        contact page
      </Link>
      . Otherwise, choose from one of the links below.
    </p>
    <hr className="border-t my-12" />
    <ul>
      <li>
        <Link to="/" className="no-underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/articles" className="no-underline">
          Articles
        </Link>
      </li>
      <li>
        <Link to="/contact" className="no-underline">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default NotFoundPage;
