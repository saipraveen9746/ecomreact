import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class ClassForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            email : '',

        };
    };

    handleInputChange = (e)=>{
        const{name,value} = e.target;
        this.setState({[name]: value});

    };

    handleSubmit = (e)=>{
        e.preventDEfault();
        console.log("Form Submitted", this.state);
    };


    render() {
        return (
            <div>
                <div><Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

   </div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input 
                    type='username' 
                    placeholder='username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleInputChange}/>
                    <label>Email</label>
                    <input
                    type='email'
                    placeholder='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}/>
                    
                    <Button  type='submit' variant="success">Submit</Button>{' '}
                </form>
            </div>
            
        );
    }
}

export default ClassForm
