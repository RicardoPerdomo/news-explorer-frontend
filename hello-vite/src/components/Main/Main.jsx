import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";

function Main({ onSearch }) {
  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world</h1>
      <p className="main__text">
        Find the latest news on any topic and save them to your personal
        account.
      </p>
      <SearchForm onSearch={onSearch} />
    </main>
  );
}

export default Main;
