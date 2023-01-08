import { Component } from "react";
import './style.css'
class SignUp extends Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    password:"",
    date:"",
    hobbies:"",
    desc:""
  };
  render() {
    return (
    <>




    {/*  */}
        <form>
        <div className="FieldContainer">
          <label>Name:</label><br/>
          <input
            type="Text"
            placeholder="Enter your Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          </div>
         

         <div className="FieldContainer">
          <label>Phone Number:</label><br/>
          <input
            type="tel"
            placeholder="Enter your Number"
            onChange={(event) => {
              this.setState({ phoneNumber: event.target.value });
            }} />
         </div>

           <div className="FieldContainer">
            <label>Email:</label><br/>
            <input type="email" placeholder="Enter your Email" onChange={(event)=>{
                this.setState({email:event.target.value});

            }}/>
            </div>

            <div className="FieldContainer">
             <label>Password:</label><br/>
             <input type="password" placeholder="Enter your password" 
             onChange={(event)=>{
               
                this.setState({password:event.target.value})
             }}/>
          </div>


          <div className="FieldContainer">
            <label>Date of Birth</label><br/>
            <input type="date" placeholder="Enter the date" onChange={
                (event)=>{
                    
                this.setState({date:event.target.value});
                }
            }/>

          </div>
             
            <div className="FieldContainer">
                <label>Select your Hobbies</label><br/>

                <input type="radio" value="Reading Books" onChange={(event)=>{console.log(event.target.value);this.setState({hobbies:event.target.value})}}/><label>Reading Books</label><br/>
                <input type="radio" value="Watching Movies" onChange={(event)=>{console.log(event.target.value);this.setState({hobbies:event.target.value})}}/><label>Watching Movie</label><br/>
                <input type="radio" value="Playing Sports" onChange={(event)=>{console.log(event.target.value);this.setState({hobbies:event.target.value})}}/><label>Playing Sports</label><br/>
                
            </div>

            <div className="FieldContainer">
            <label>Description</label><br/>

            <textarea onChange={(event)=>{console.log(event.target.value);this.setState({desc:event.target.value})}}/>
            </div>

            <button onClick={()=>{

                // document.getElementById("messageBox").style.display="block";
               
            }}>submit</button>

        </form>
         <div className="messageBox" id="messageBox">
              <p>Hi {this.state.name} please check your details before you submit       </p>
              <ul>
                <li>Your Phone Number is {this.state.phoneNumber}</li>
                <li>Your E-mail is {this.state.email}</li>
                <li>Your Password is {this.state.password}</li>
                <li>Your  Date of Birth is {this.state.date}</li>
                <li>Your hobbies is {this.state.hobbies}</li>
                <li>Your Description is {this.state.desc}</li>
              </ul>
        
         </div>
         </>
       
      
    )
  }
}

export default SignUp;
