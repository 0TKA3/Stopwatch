import playIcon from '../assets/icons/play.svg' 
import pauseIcon from '../assets/icons/pause.svg' 
import repeatIcon from '../assets/icons/repeat.svg' 
import closeIcon from '../assets/icons/close.svg' 
import { useState } from 'react'


const StopwatchItem = ({obj,stopwatchList,setStopwatchList}) => {

    let [time,setTime] = useState('00:00')

    function runTime(event) {
        let currentId = event.currentTarget.getAttribute('object-id')
    }

    function deleteItem(event) {
        let currentId = event.currentTarget.getAttribute('object-id')
        const newList = stopwatchList.filter((elem)=>{
            if(currentId!=elem.id) {
                return true
            }
            else {
                return false
            }
        })
        setStopwatchList(newList)
    }

    return (
        <div className="stopwatch" key={obj.id}>
              <div className="top-side">
                <input className='stopwatch-title' type="text" defaultValue={obj.title}/>
                <button className="close__button" onClick={deleteItem} object-id={obj.id}><img src={closeIcon} alt="play-button"  className="button-image"/></button>
              </div>
              <h2>{time}</h2>
              <div className="buttom-side">
                <button><img  src={playIcon} alt="play-button"  className="button-image" onClick={runTime}/></button>
                <button><img src={pauseIcon} alt="pause-button"  className="button-image"/></button>
                <button><img src={repeatIcon} alt="repeat-button"  className="button-image"/></button>
              </div>
        </div>
    );
}
 
export default StopwatchItem;