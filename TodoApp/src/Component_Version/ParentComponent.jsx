import { useState } from "react";
import { v4 as uniqueID } from "uuid";
import InputBox from './inputBox'
import TaskList from './TaskList';
import UpdateInput from "./UpdateInput"

let ParentComponent = () => {
  //states
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isEditingId,SetenableEditing]=useState(null);
  const [newTodo,setNewTodo]=useState("");


  let taskHandler = (event) => {
    setTask(event.target.value);

  };

  let addTask = () => {
    if (!task) {
      alert("Enter an item");
      return;
    }

    const item = {
  
      id: uniqueID(),
      value: task,
    };

    setTaskList((prevList) => [...prevList, item]);
    setTask("");

  };

  function deleteTask(deleteID) {
    console.log(deleteID);

    const newTask = taskList.filter((item) => item.id !== deleteID);
    console.log(newTask);
    setTaskList(newTask);
  }

  // setting  editingID and newTodo title.
  function editTask(taskObj)
  {
    console.log("task want to be edited",taskObj);
     let {id,value}=taskObj;
      SetenableEditing(id);
      setNewTodo(value);
      
  }

  function updateTaskList()
  {

      if(newTodo==="")
       {
      alert("Updated value cannot be empty"); 
       return 
      }

       setTaskList((prevList)=>{
                prevList.map((item)=>{
                  if(item.id===isEditingId)
                  {
                      item.value=newTodo;
                  }
                 })

                 return prevList;
       });

       SetenableEditing(null);//only then the normal component will render.
      


      
  }

  return (
    <>
      <h1>Moduled todo App</h1>



  
     <InputBox  value={task} onChange={taskHandler} />


      <br />
      <button onClick={addTask}>Add</button>


      {/* list as Component */}

      {
    <ul>
        {taskList.map((item)=>{
            return(
                <li key={item.id}>
                    {
                        (isEditingId!==item.id)?
                        (<TaskList item={item} deleteFunc={deleteTask}  editFunc={editTask} />):
                        (<UpdateInput intialValue={newTodo} updateTaskName={setNewTodo}  updateTaskList={updateTaskList}/>)
                        
                    }
                </li>
            )
        })}
    </ul>
      }







    
    </>
  );
};

export default ParentComponent;
