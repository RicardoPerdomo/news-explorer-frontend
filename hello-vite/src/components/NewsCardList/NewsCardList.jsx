import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function NewsCardList({ articles, isLoading, error, isLoggedIn }) {
  const [visibleCards, setVisibleCards] = useState(3);
  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + 3);
  };

  return (
    <section className="newscard">
      {isLoading && <Preloader />}
      {!isLoading && articles.length > 0 && (
        <h1 className="newscards__title">Search results</h1>
      )}
      {error && <p className="newscard__error">{error}</p>}
      {articles.length === 0 && !isLoading && !error && <NotFound />}
      <ul className="newscards__list">
        {articles.slice(0, visibleCards).map((article, index) => (
          <li className="newscards__item" key={index}>
            <NewsCard
              isLoggedIn={isLoggedIn}
              title={article.title}
              date={new Date(articles.publishedAt).toDateString()}
              source={article.source.name}
              description={article.description}
              imageUrl={article.urlToImage}
            />
          </li>
        ))}
      </ul>
      {visibleCards < articles.length && (
        <button
          type="button"
          className="newscard__button"
          onClick={showMoreCards}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
