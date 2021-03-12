import React, {useState} from 'react';
import './App.css';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

// Assigns the baseUrl as port 3001 if development otherwise, use the public url
// used to start react, usually 3000
const baseUrl = (process.env.NODE_ENV === 'development') ? 
                'http://localhost:3001' 
                : process.env.PUBLIC_URL;

const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  message: ""
}

function App() {
  
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event)=>{
    setFormData({
        ...formData, // spread operator in order to maintain previous data
        [event.target.name] : event.target.value
    })
  }

  const resetFields = () => {
    setFormData({...initialState})
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post(`${baseUrl}/new`, {...formData})
    .then(response => {
      console.log('Response data: ', response.data)
      resetFields()
    })
    .catch(err => console.log('Error: ', err))
  }

  // destruturing
  let { fname, lname, email, phone, message} = formData;

  return (
    <div className="App">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormGroup>
          <Label for="fname">First Name:</Label>
          <Input type="text" name="fname" id="fname" value={fname} onChange={handleChange}/>
          
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name:</Label>
          <Input type="text" name="lname" id="lname" value={lname} onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input type="phone" name="phone" id="phone" value={phone} onChange={handleChange}/>
          <FormText><span>Ex. 5555555555</span></FormText>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input type="email" name="email" id="email" value={email} onChange={handleChange}/>
          <FormText><span>Ex. name@example.com</span></FormText>
        </FormGroup>
        <FormGroup>
          <Label for="message">Message: </Label>
          <Input type="textarea" name="message" id="message" value={message} onChange={handleChange}/>
        </FormGroup>
        <Button className='btn-success' style={{background: "darkgreen"}}>Submit</Button>
        <Button className='btn-success' 
                type='reset' 
                style={{background: "darkred"}}>
                Reset
        </Button>
      </Form>
    </div>
  );
}

export default App;
