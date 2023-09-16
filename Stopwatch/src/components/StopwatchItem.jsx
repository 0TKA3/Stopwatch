import playIcon from '../assets/icons/play.svg' 
import pauseIcon from '../assets/icons/pause.svg' 
import repeatIcon from '../assets/icons/repeat.svg' 
import closeIcon from '../assets/icons/close.svg' 
import { useState, useRef, useEffect } from 'react'


const StopwatchItem = ({obj,stopwatchList,setStopwatchList,newStopwatch}) => {

    let currentTime
    let [time,setTime] = useState('0:0:0')
    let isPausedRef = useRef(false);
    let isResetRef = useRef(false);
    let isRunRef = useRef(false)
    let [disabled, setDisabled] = useState(false)

    function pauseTime() {
        isPausedRef.current = true;
        setDisabled(false)
    }
    function resetTime() {
        isResetRef.current = true;
        setTimeout(()=>{setTime('0:0:0')},100)
        setDisabled(false)
    }


    let currentStopwatch = {
        ...newStopwatch
    }

    function runTime(event) {
        setDisabled(true)
        if(disabled===false) {
            isRunRef.current = !isPausedRef.current;
            isPausedRef.current = false;
            isResetRef.current = false;
    
            currentTime = time.split(':')
            currentTime = currentTime.map((elem)=> parseInt(elem))
            const interval = setInterval(() => {
    
                if (isPausedRef.current === true) {
                    clearInterval(interval);
                }
                
                if(currentTime[2]<60) {
                    currentTime[2] = currentTime[2]+1
                }
                if(currentTime[2]==60) {
                    currentTime[1] = currentTime[1]+1
                    currentTime[2] = 0
                }
                if(currentTime[1]==60) {
                    currentTime[1] = 0
                    currentTime[0] = currentTime[0]+1
                }
                let newTime = currentTime.join(':')
                
                if (isResetRef.current === true) {
                    clearInterval(interval);
                    newTime = ('0:0:0')
                }
                
                setTime(newTime)
            }, 1000);
        }
        
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

    const [color, setColor] = useState(obj.color);


    return (
        <div className="stopwatch" key={obj.id} style={{backgroundColor: color}}>
              <div className="top-side">
                <input className='stopwatch-title' type="text" defaultValue={currentStopwatch.title}/>
                <button className="close__button" onClick={deleteItem} object-id={obj.id}><img src={closeIcon} alt="play-button"  className="button-image"/></button>
              </div>
              <h2>{time}</h2>
              <div className="buttom-side">
                <button disabled={disabled}><img  src={playIcon} alt="play-button"  className="button-image" onClick={runTime}/></button>
                <button><img src={pauseIcon} alt="pause-button"  className="button-image" onClick={pauseTime}/></button>
                <button><img src={repeatIcon} alt="repeat-button"  className="button-image" onClick={resetTime}/></button>
              </div>
        </div>
    );
}
 
export default StopwatchItem;