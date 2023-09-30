
import StopwatchItem from './StopwatchItem'



const StopwatchList = ({stopwatchList, setStopwatchList,newStopwatch}) => {
    return (
        <>
        {stopwatchList.map((obj,index)=>
            <StopwatchItem obj={obj} key={obj.id} stopwatchList={stopwatchList} setStopwatchList={setStopwatchList} newStopwatch={newStopwatch}></StopwatchItem>
          )}
        </>
    );
}
 
export default StopwatchList;