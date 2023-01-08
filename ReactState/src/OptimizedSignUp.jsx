import { Component } from "react";

class OptimizedSignUp extends Component
{
    state={
         name:"",
         password:"",
         DOB:""
    }
    
    valueUpdater=(key,value)=>{

        console.log(key,value)
        this.setState({[key]:value});
     console.log(this.state);
    }



    // cleaner 
    valueUpdater2=(event)=>{

        console.log(event);
         let { value,name}=event.target;
         console.log(value,name)

         this.setState({[name]:value});

    }

    
    render()
    {

        const{
          name,
          password,
          DOB
        }=this.state;

        return (
        
            <>
            <form>
                <input type="text" name="" placeholder="Enter your Name"  onChange={(e)=>{
                    this.valueUpdater("name",e.target.value)
                }}/>
                <input type="passsword" name="password" placeholder="Enter your password" onChange={(e)=>{this.valueUpdater2(e)}}/>
                {/* <input type="date" placeholder="Enter your Date of Birth" onChange={}/> */}
            </form>

            <p>
                Name is {this.state.name}<br/>
                Password is {this.state.password}
            </p>
            </>
        )
    }
}

export default OptimizedSignUp;