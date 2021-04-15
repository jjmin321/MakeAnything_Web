import { FaSearch } from "react-icons/fa";

const Search = () => {
  alert("검색 완료!");
};

const BannerSearch = () => {
  return (
    <form className="Banner-Middle-Search" onSubmit={Search}>
      <input
        className="Banner-Middle-Search-Text"
        placeholder="어떤 물건이든 검색해보세요!"
        onFocus={(e) => {
          e.target.placeholder = "";
          document.querySelector("input").placeholder = "";
        }}
      />
      <button type="submit" className="Banner-Middle-Search-Button">
        <FaSearch></FaSearch>
      </button>
    </form>
  );
};

export default BannerSearch;
