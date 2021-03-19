import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";



const Contactme = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit= (event)=>{
    event.preventDefault();
    console.log("form submitted");


  };

  return (
    <div id="contact">
      <FormContainer>
        <h1>Contact</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="eg. John Smith"
              value={name}
              onChange={(event)=>setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label> Your Email </Form.Label>
            <Form.Control
              type="text"
              placeholder="JohnSmith@email.com"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="massage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              rows="4"
              as="textarea"
              placeholder="Hi, I want to hire you... "
              value={message}
              onChange={(event)=>setMessage(event.target.value)}
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Send
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Contactme;
