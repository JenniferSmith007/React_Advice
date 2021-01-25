import { useState } from "react";
import Advice from "./Advice";
import axios from "axios";
import { SEARCHED_ADVICE_URL } from "../Constant";
import Searched from "./Images/Searched.png";

function SearchedAdvice() {
  const [searchAdvice, setSearchAdvice] = useState("");
  const [searchedApi, setSearchedApi] = useState(undefined);
  const searchUrl = `${SEARCHED_ADVICE_URL}${searchAdvice}`;
  function getDataFromSecondApi() {
    console.log(searchUrl);
    axios.get(searchUrl).then(({ data }) => {
      setSearchedApi(data);
      console.log(data);
    });
  }

  return (
    <div>
      <div className="cont">
        <img
          className="searchedlogo"
          src={Searched}
          width="250"
          height="80"
          alt=""
        />
      </div>

      {searchedApi === undefined ? (
        ``
      ) : (
        <Advice searchedApi={searchedApi.slips[0].advice} />
      )}
      <input
        className="inputbar"
        onChange={(event) => {
          setSearchAdvice(event.target.value);
          console.log(event.target.value);
        }}
      ></input>
      <button className="searched" onClick={getDataFromSecondApi}>
        Click Me!
      </button>
    </div>
  );
}

export default SearchedAdvice;
