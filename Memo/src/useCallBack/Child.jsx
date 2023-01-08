import {memo} from 'react'
function Child(props)
{

    console.log('Child re-Render');
    return(
        <>
            <button onClick={props.onClick}>Click Me</button>
        </>
    )
}

export default  memo(Child);