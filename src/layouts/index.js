import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="NeutralTone | UI Development Studio"
      meta={[
        {
          name: "description",
          content:
            "NeutralTone is a Norwich based multidisciplined distributed software engineering team."
        }
      ]}
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=Work+Sans:400,700",
          rel: "stylesheet"
        }
      ]}
    />
    <div className="flex-grow flex items-center max-w-xl mx-auto px-4 pt-8 pb-28 w-full leading-normal">
      {children()}
    </div>
    <Navigation />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
