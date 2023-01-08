
import  InputBox from './inputBox';

function UpdateInput(props)
{
    
   return (
    <>
        {/* <input value={props.intialValue} onChange={(e)=>{props.updateTaskName(e.target.value)}}></input> */}
        <InputBox  value={props.intialValue} onChange={updateTaskName} />

        <button onClick={()=>{props.updateTaskList()}}>👍</button>
    </>
   )
}
export default UpdateInput