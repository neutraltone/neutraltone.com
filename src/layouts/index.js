import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Gatsby Starter Tailwind"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
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
