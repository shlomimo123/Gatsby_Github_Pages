import React from 'react';
import Link from 'gatsby-link';
import InnerNavigation from '../components/layout/InnerNavigation/inner-navigation';
import Article from '../components/layout/Article/article';
import headerImage from '../images/header-image.jpg';

var containerStyle = {
  backgroundColor: '#fff',
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <img src={headerImage} alt="" className="img-fluid" />
      <InnerNavigation />
      <div className="container" style={containerStyle}>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <Article post={frontmatter} />
            <Article post={frontmatter} />
            <Article post={frontmatter} />
            <Article post={frontmatter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query AboutByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        templatepath
        path
        title
      }
    }
  }
`;
