
import StopwatchItem from './StopwatchItem'



const StopwatchList = ({stopwatchList, setStopwatchList}) => {
    return (
        <>
        {stopwatchList.map((obj,index)=>
            <StopwatchItem obj={obj} key={obj.id} stopwatchList={stopwatchList} setStopwatchList={setStopwatchList}></StopwatchItem>
          )}
        </>
    );
}
 
export default StopwatchList;