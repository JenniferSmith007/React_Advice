import "./App.css";
import Header from "./Component/Header";
import AdviceSlip from "./Component/AdviceSlip";
import SearchedAdvice from "./Component/SearchedAdvice";
import { SEARCHED_ADVICE_URL } from "./Constant";

function App() {
  return (
    <div className="App">
      <Header />
      <AdviceSlip />
      <SearchedAdvice />
    </div>
  );
}

export default App;
