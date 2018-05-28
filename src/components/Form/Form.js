import React, { Component } from 'react'
import './Form.css'
import fire from '../Firebase/Firebase'

class Form extends Component {
  state = {
    firstName: '',
    firstNameError:'',
    lastName: '',
    lastNameError:'',  
    email: '',
    emailError: '',
    text: '',
    textError: '',
    isSucces: ''
  }

  change = e => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = () => {
    let isError = false;
    const errors = {
      firstName: '',
      firstNameError:'',
      lastName: '',
      lastNameError:'',  
      email: '',
      emailError: '',
      text: '',
      textError: '',
      isSucces: ''
    };

   

    if (this.state.firstName.length < 1) {
      isError = true;
      errors.firstNameError = <div className="errMsg">First name needs to be at least 1 character long</div>;
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = <div className="errMsg">Requires valid email</div>;
    } 

    if (!isError){
      errors.isSucces = <div className="success"> Thank you for your message</div> 
     
    }


    this.setState({
      ...errors
    })

  return isError
  

}

 onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state)


    const err = this.validate();
    if (!err){
    //clear form 
    this.setState({
      firstName: '',
      firstNameError:'',
      lastName: '',
      lastNameError:'',  
      email: '',
      emailError: '',
      text: ''
    })
    console.log(this.state)
    }

    const messageRef = fire.database().ref('messages');
    const message = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      text: this.state.text
    }

    console.log(message)
    messageRef.push(message);

  }

  render () {
    return (
      <div className="formHolder">
        <form 
              method="post"
        >
        <span> {this.state.isSucces}</span>
          <input 
            type="text"
            name="firstName"
            placeholder="First name" 
            value={this.state.firstName} 
            onChange={this.change}
            />
            <span> {this.state.firstNameError}</span>
     
          <input 
            type="text"
            name="lastName"
            placeholder="Last name" 
            value={this.state.lastName} 
            onChange={this.change}
      
            />
       
          <input
            type="email" 
            name="email"
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.change}
      
            />
            <span> {this.state.emailError}</span>

            <textarea 
            name="text"
            placeholder="text" 
            value={this.state.text} 
            onChange={this.change}
            />
      
            <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
      
    )
  }
}

export default Form