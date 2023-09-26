import $ from "./LoadingState.module.scss";

const SearchLoadingState = () => {
  return (
    <div className={$.listItem}>
      <div className={$.fakeImg}></div>
      <div className={$.fakeNameContainer}>
        <span className={$.fakeName}></span>
      </div>
    </div>
  );
};

export default SearchLoadingState;
