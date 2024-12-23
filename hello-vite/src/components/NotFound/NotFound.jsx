import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__icon" />
      <h1 className="not-found__title">Nothing found</h1>
      <p className="not-found__text">
        Sorry, but nothing matched your seach terms.
      </p>
    </div>
  );
}

export default NotFound;
