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
function App() {
  return (
    <>
      <Container>
        <Header />
        <Switch>
          <Route ecact path="/list">
            <InvoiceList />
          </Route>
          <Route ecact path="/pending">
            <PendingInvoiceList />
          </Route>
          <Route ecact path="/new">
            <NewInvoiceForm />
          </Route>
          <Route ecact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>

      <FooterContainer />
    </>
  );
}

export default App;
