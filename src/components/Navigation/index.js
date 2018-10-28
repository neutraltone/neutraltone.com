import Link from "gatsby-link";
import React from "react";
import { withRouter } from "react-router-dom";
import Back from "./Back";

const Navigation = props => {
  return (
    <div className="fixed pin-x pin-b bg-black">
      <nav className="flex justify-between max-w-xl mx-auto p-4 md:py-8 text-sm">
        <ul className="flex items-center -mx-4 list-reset">
          <li className="px-4">
            <Link to="/articles" className="no-underline text-white">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline text-white">
              Contact
            </Link>
          </li>
        </ul>
        {props.location.pathname !== "/" && <Back />}
      </nav>
    </div>
  );
};

export default withRouter(Navigation);
