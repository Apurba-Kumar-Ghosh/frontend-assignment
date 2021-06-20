import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { NewInvoiceContainer } from "../containers/NewInvoiceContainer";

const Container = styled.div`
  width: 75vw;
  height: 75vh;
  margin: 100px auto;
`;
export function NewInvoiceForm() {
  const [inputMode, setInputMode] = useState(true);
  const [data, setData] = useState({
    Name: "",
    workOne: "",
    hoursOne: "",
    workTwo: "",
    hoursTwo: "",
    workThree: "",
    hoursThree: "",
    firstLine: "",
    secondLine: "",
    city: "",
    state: "",
    zipCode: "",
    date: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setInputMode(false);
  }
  return inputMode ? (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="CustomerName">Name</Label>
              <Input
                type="text"
                name="Name"
                value={data.Name}
                id="CustomerName"
                placeholder="Name"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="date">Name</Label>
              <Input
                type="date"
                name="date"
                value={data.date}
                id="CustomerName"
                placeholder="Date"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Work Description</Label>
              <Input
                type="text"
                name="workOne"
                value={data.workOne}
                id="exampleEmail"
                placeholder="Work Done"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePassword">No of Hours</Label>
              <Input
                type="number"
                name="hoursOne"
                value={data.hoursOne}
                id="examplePassword"
                placeholder="No of Hours"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Work Description</Label>
              <Input
                type="text"
                name="workTwo"
                value={data.workTwo}
                id="exampleEmail"
                placeholder="Work Done"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePassword">No of Hours</Label>
              <Input
                type="number"
                name="hoursTwo"
                value={data.hoursTwo}
                id="examplePassword"
                placeholder="No of Hours"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Work Description</Label>
              <Input
                type="text"
                name="workThree"
                value={data.workThree}
                id="exampleEmail"
                placeholder="Work Done"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="examplePassword">No of Hours</Label>
              <Input
                type="number"
                name="hoursThree"
                value={data.hoursThree}
                id="examplePassword"
                placeholder="No of Hours"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input
                type="text"
                name="firstLine"
                value={data.firstLine}
                id="Address"
                placeholder="1234 Main St"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress2">Address 2</Label>
              <Input
                type="text"
                name="secondLine"
                value={data.secondLine}
                id="exampleAddress2"
                placeholder="Apartment, studio, or floor"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                type="text"
                name="city"
                value={data.city}
                id="exampleCity"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input
                type="text"
                name="state"
                value={data.state}
                id="exampleState"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input
                type="number"
                name="zipCode"
                value={data.zipCode}
                id="exampleZip"
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Button>Submit</Button>
      </Form>
    </Container>
  ) : (
    <NewInvoiceContainer data={data} />
  );
}
