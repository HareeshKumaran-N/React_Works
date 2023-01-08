
function InputBox(props)
{
  return (

    <input  value={props.value} onChange={(e)=>{props.onChange(e)}}/>
  
  )
}

InputBox.defaultprops={
type:"text",
placeholder:"Enter Task Name"

}
export default InputBox;