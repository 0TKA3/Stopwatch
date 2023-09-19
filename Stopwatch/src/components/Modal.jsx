import playIcon from '../assets/icons/play.svg' 
import pauseIcon from '../assets/icons/pause.svg' 
import repeatIcon from '../assets/icons/repeat.svg' 
import closeIcon from '../assets/icons/close.svg' 
import checkIcon from '../assets/icons/check.svg' 
import { useState, useRef } from 'react'

const Modal = ({createModal,modalVisibility,setModalVisibility,setStopwatchList,stopwatchList,color,setColor,title,setTitle,newStopwatch}) => {



    let newColor = ''
    let newTitle = ''


    

    function createStopwatch() {
      setColor(newColor)
      setTitle(newTitle)
      setStopwatchList([...stopwatchList, { ...newStopwatch, color: newColor,title:newTitle}])
      localStorage.setItem('stopwatchesStorage', JSON.stringify([...stopwatchList, { ...newStopwatch, color: newColor, title: newTitle}]))
      setModalVisibility('none')
      
    }
    function createModal() {
      if(modalVisibility=='modal-container') {
        setModalVisibility('none')
      }
      if(modalVisibility=='none') {
        setModalVisibility('modal-container')
      }
    }
  

    function getColor(event) {
        newColor = event.currentTarget.value
        console.log(newColor)
    }

    function getTitle(event) {
        newTitle = event.currentTarget.value
        console.log(newTitle)
    }

  return (
    <>
      <div className={modalVisibility}>
        <div className="modal">
          <div className="modal-inner">
            <div className="stopwatch stopwatch-modal">
              <div className="top-side">
                <input
                  className="stopwatch-title"
                  type="text"
                  defaultValue="Name"
                  onChange={getTitle}
                />
                <button
                  className="close__button"
                  onClick={createModal}
                >
                  <img
                    src={closeIcon}
                    alt="close-modal"
                    className="button-image"
                  />
                </button>
              </div>
              <div className="color-pick-side">
                <h2>Pick a color</h2>
                <input type="color" className='color-input' onChange={getColor}/>
              </div>
              <div className="buttom-side check-side">
                <button className='check-button'>
                  <img
                    src={checkIcon}
                    alt="play-button"
                    className="button-image"
                    onClick={createStopwatch}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
