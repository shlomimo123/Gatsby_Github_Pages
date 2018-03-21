import React from 'react';
import Link from 'gatsby-link';
import './article.scss';
import article_img from '../../../images/article-img.jpg';

const Article = ({ post }) => (
  <article className="article row">
    <div className="col-md-4">
      <div className="d-flex flex-column">
        <div className="article__block-title">
          <h4>{post.title}</h4>
        </div>

        <div className="article__img">
          <img src={article_img} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="container">
        <p className="article__text-style">
          לפעול לקידום היערכות גופי החירום, ספקי החירום והמשק החיוני לחירום.
          לשמש מנחה מקצועי בתחום ההיערכות לחירום. לפעול במצב חירום במשק כדי
          לסייע לשר הביטחון, לגופי החירום ולספקי החירום.
        </p>
        <p className="article__text-style">
          לפעול לקידום היערכות גופי החירום, ספקי החירום והמשק החיוני לחירום.
          לשמש מנחה מקצועי בתחום ההיערכות לחירום. לפעול במצב חירום במשק כדי
          לסייע לשר הביטחון, לגופי החירום ולספקי החירום.
        </p>
        <p className="article__text-style">
          לפעול לקידום היערכות גופי החירום, ספקי החירום והמשק החיוני לחירום.
          לשמש מנחה מקצועי בתחום ההיערכות לחירום. לפעול במצב חירום במשק כדי
          לסייע לשר הביטחון, לגופי החירום ולספקי החירום.
        </p>
      </div>
    </div>
  </article>
);

export default Article;
