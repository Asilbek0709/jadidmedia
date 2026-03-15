"use client";

import Link from "next/link";

export default function ArticleList({ variation }) {
  return (
    <div className="articlesSection">
      <div className="variationTitle">
        <h1>{variation.title}</h1>
      </div>
      <ul className="articles">
        {variation.articles.map(article => (
          <li key={article.id} className="articleCard">
            <div className="articleInfo">
              <Link className="article" href={`/article/${article.slug}`}><strong>{article.title}</strong></Link>
              <p>{article.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
