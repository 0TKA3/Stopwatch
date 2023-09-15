import { useState } from "react";
import "./assets/style/style.scss";
import createIcon from './assets/icons/plus.svg' 
import StopwatchList from "./components/StopwatchList";



function App() {

  let [stopwatchList, setStopwatchList] = useState([])

  let newStopwatch = {
      title: 'Name me!',
      id: (new Date()).getTime(),
  }

  function createStopwatch() {
    setStopwatchList([...stopwatchList,newStopwatch])
  }

  return (
    <>
      <div className="container">
        <StopwatchList stopwatchList={stopwatchList} setStopwatchList={setStopwatchList}></StopwatchList>
        <div className="create-stopwatch" onClick={createStopwatch}><img src={createIcon} alt="create-button"  className="play-button-image"/></div>
      </div>
    </>
  );
}

export default App;
