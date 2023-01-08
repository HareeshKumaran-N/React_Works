import { useState } from "react";
import { v4 as uniqueID } from "uuid";




let Todo = () => {
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
    console.log(taskObj);
    console.log("@Before",isEditingId);
     let {id,value}=taskObj;
      SetenableEditing(id);
      setNewTodo(value);
      console.log("@After",isEditingId);
      
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
      <h1>TODO App</h1>

      <input
        type="text"
        placeholder="Please Enter the tasks"
        value={task}
        onChange={(e) => {
          taskHandler(e);
        }}
      ></input>
      <br />
      <button onClick={addTask}>Add</button>

      <ul>
        {
          taskList.map((item)=>{
            return(
              <li key={item.id}>
                {
                  (isEditingId===item.id) ? (<div><input value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}}/><button onClick={()=>{updateTaskList()}}>👍</button></div>) 
                  :
                  (<div> {item.value}{" "} <button onClick={() => deleteTask(item.id)}>⛔</button><button onClick={()=>{editTask(item)}}>✏️</button></div>)
                  
                }
              </li>
            )
          })
        }
      </ul> 





    
    </>
  );
};

export default Todo;
