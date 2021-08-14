import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Formed extends React.Component {
  render() {
    return (
        <Form action="https://formspree.io/shirazahmed.am@gmail.com" method="POST">
            <h4>Contact Me</h4>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="Email" id="exampleEmail" placeholder="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleName" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="Name" id="exampleName" placeholder="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Comments or Message</Label>
          <Col sm={10}>
            <Input type="textarea" name="Comments/Message" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
        <br/>
        <br/>
        <br/>
      </Form>
    );
  }
}
