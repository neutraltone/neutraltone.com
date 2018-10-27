import React from "react";
import ArticleListing from "../components/ArticleListing";

const ArticlesPage = () => (
  <div className="max-w-md">
    <header className="mb-8">
      <h1>Articles</h1>
    </header>
    <p>
      An exploration into the ever evolving landscape of the web, user
      experience design philosophy and other mediums of creative expression.
    </p>
    <hr className="border-t my-12" />
    <ArticleListing />
  </div>
);

export default ArticlesPage;
