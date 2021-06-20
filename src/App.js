import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import { FooterContainer } from "./containers/FooterContainer";
import "./App.css";
import Home from "./pages/Home";
import { NewInvoiceForm } from "./pages/NewInvoice";
import { InvoiceList } from "./pages/InvoiceList";
import { PendingInvoiceList } from "./pages/PendingInvoices"
import styled from "styled-components";

const Container = styled.div`{
  background : #f8f8f8;
}`;
const Heading = styled.div`
height : fit-content;
color : red;
text-align : center;
font-size : 24px;
width : 100%;
margin-top : -50px;
`;
function App() {
  return (
    <>
      <Container>
        <Header />
        <Switch>
          <Route ecact path="/list">
            <Heading>
              <h2>List of Invoices</h2>
            </Heading>
            <InvoiceList />
          </Route>
          <Route ecact path="/pending">
            <Heading>
              <h2>Late Invoices List</h2>
            </Heading>
            <PendingInvoiceList />
          </Route>
          <Route ecact path="/new">
            <Heading>
              <h2>Create New Invoice</h2>
            </Heading>
            <NewInvoiceForm />
          </Route>
          <Route ecact path="/">
            <Heading>
              <h2>Sample Invoice</h2>
            </Heading>
            <Home />
          </Route>
        </Switch>
      </Container>

      <FooterContainer />
    </>
  );
}

export default App;
