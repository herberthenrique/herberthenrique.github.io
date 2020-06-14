import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@herberth3nrique" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta
          name="twitter:description"
          content={frontmatter.metaDescription}
        />
        {!!frontmatter.thumbnail && (
          <meta
            name="twitter:image"
            content={`http://herberthenrique.com/${frontmatter.thumbnail}`}
          />
        )}
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="social-share">
            <hr className="social-share__separator" />
            <p>
              Share on{" "}
              <a
                href={`https://twitter.com/share?text=${frontmatter.title} via @${siteMetadata.twitter}&url=http://herberthenrique.com${frontmatter.path}`}
                onclick="window.open(this.href, 'twitter-share', 'width=550,height=235'); return false;"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href={`https://news.ycombinator.com/submitlink?u=http://herberthenrique.com${frontmatter.path}&t=${frontmatter.title}`}
                onclick="window.open(this.href, 'hn-share', 'width=550,height=350'); return false;"
              >
                Hacker News
              </a>{" "}
              or{" "}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=http://herberthenrique.com${frontmatter.path}&t=${frontmatter.title}`}
                onclick="window.open(this.href, 'hn-share', 'width=550,height=350'); return false;"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        twitter
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
