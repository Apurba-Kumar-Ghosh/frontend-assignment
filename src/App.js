import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/Header";
import { FooterContainer } from "./containers/FooterContainer";
import "./App.css";
import Home from "./pages/Home";
import { NewInvoiceForm } from "./pages/NewInvoice";
import { InvoiceList } from "./pages/InvoiceList";
import {PendingInvoiceList} from "./pages/PendingInvoices"

function App() {
  return (
    <>
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
      <FooterContainer />
    </>
  );
}

export default App;
