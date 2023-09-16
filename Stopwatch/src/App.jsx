import { useState } from "react";
import "./assets/style/style.scss";
import createIcon from './assets/icons/plus.svg' 
import StopwatchList from "./components/StopwatchList";
import Modal from "./components/Modal";



function App() {

  let [modalVisibility, setModalVisibility] = useState('none')

  let [stopwatchList, setStopwatchList] = useState([])
  let [title,setTitle] = useState('')
  let [color,setColor] = useState('')

  let newStopwatch = {
      title: title,
      id: (new Date()).getTime(),
      color: color,
  }

  function createStopwatch() {
    setStopwatchList([...stopwatchList,newStopwatch])
  }
  function createModal() {
    if(modalVisibility=='modal-container') {
      setModalVisibility('none')
    }
    if(modalVisibility=='none') {
      setModalVisibility('modal-container')
    }
  }

  return (
    <>
      <div className="container">
        <StopwatchList stopwatchList={stopwatchList} setStopwatchList={setStopwatchList} newStopwatch={newStopwatch}></StopwatchList>
        <div className="create-stopwatch" onClick={createModal}><img src={createIcon} alt="create-button"  className="play-button-image"/></div>
      </div>
        <Modal modalVisibility={modalVisibility} createStopwatch={createStopwatch} createModal={createModal} setModalVisibility={setModalVisibility} setStopwatchList={setStopwatchList} stopwatchList={stopwatchList} title={title} setTitle={setTitle} color={color} setColor={setColor} newStopwatch={newStopwatch}></Modal>
    </>
  );
}

export default App;
