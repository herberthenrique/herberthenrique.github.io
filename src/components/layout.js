import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div class="social-network">
          <a
            href="https://twitter.com/herberth3nrique"
            rel="noopener noreferrer"
            target="_blank"
          >
            twitter
          </a>{" "}
          <a
            href="https://github.com/herberthenrique"
            rel="noopener noreferrer"
            target="_blank"
          >
            github
          </a>{" "}
          <a
            href="https://linkedin.com/in/herberthenrique"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </a>
        </div>
        <div class="info">
          <span role="img" aria-label="">
            👨‍💻
          </span>{" "}
          made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          - herbert henrique
        </div>
      </footer>
    </div>
  );
};

export default Layout;