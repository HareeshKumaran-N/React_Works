
function TaskList (props)
{
    
   return (
    
    // <ul>
    //       {
    //       props.arrOfTask.map((item)=>{
    //         return(
    //             <li key={item.id}>
    //                 {
    //                 (props.editingId===item.id)?
    //                 <UpdateInput intialValue={props.intialValue} updateTaskName={props.updateTaskName} updateTaskList={props.updateTaskList}/>
    //                 :
    //                 <div>{item.value}{" "}<button onClick={()=>{props.deleteFunc(item.id)}}>⛔</button><button onClick={()=>{props.editFunc(item)}}>✏️</button></div>
                    
                   
                    
    //                 } 
    //             </li>
    //         )
    //       })
    //       }  
    // </ul>

    <div>{props.item.value}{" "}<button onClick={()=>{props.deleteFunc(props.item.id)}}>⛔</button><button onClick={()=>{props.editFunc(props.item)}}>✏️</button></div>

    
 
   )
}

export default TaskList;