import React from "react";
import Invoice from "../Components/invoice/index";

export function InvoiceContainer() {
  return (
    <Invoice>
      <Invoice.Header>
        <Invoice.Title>INVOICE</Invoice.Title>
        <Invoice.Address>
          <Invoice.Text>Apurba Ghosh</Invoice.Text>
          <Invoice.Text>VidydaSagar Sarani</Invoice.Text>
          <Invoice.Text>Asansol</Invoice.Text>
          <Invoice.Text>713304</Invoice.Text>
        </Invoice.Address>
      </Invoice.Header>
      <Invoice.Group>
        <Invoice.Frame>
          <Invoice.SubText>Billed to</Invoice.SubText>
          <Invoice.Address>
            <Invoice.Text>Name</Invoice.Text>
            <Invoice.Text>FirstLine of Address</Invoice.Text>
            <Invoice.Text>Location</Invoice.Text>
            <Invoice.Text>Zip Code</Invoice.Text>
          </Invoice.Address>
        </Invoice.Frame>
        <Invoice.Frame>
          <Invoice.Frame>
            <Invoice.SubText>Invoice Number</Invoice.SubText>
            <Invoice.Text>00000000</Invoice.Text>
          </Invoice.Frame>
          <Invoice.Frame>
            <Invoice.SubText>Date of Issue</Invoice.SubText>
            <Invoice.Text>abcd-xy-mn</Invoice.Text>
          </Invoice.Frame>
        </Invoice.Frame>
      </Invoice.Group>
      <Invoice.List>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Heading>Description</Invoice.Heading>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Heading>Unit Charge</Invoice.Heading>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Heading>Quantity</Invoice.Heading>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Heading>Amount</Invoice.Heading>
          </Invoice.Units>
        </Invoice.ListItem>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Text>Your Item Name</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>No of hours</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>amount</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Text>Your Item Name</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs 1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>No of hours</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>amount</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Text>Your Item</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs 1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>No of hours</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>amount</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
      </Invoice.List>
      <Invoice.GroupTotal>
        <Invoice.FooterContainer>
          <Invoice.Footer>
            <Invoice.Text>Due Date :</Invoice.Text>
            <Invoice.Text>2021/8/31</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Text>Pay through :</Invoice.Text>
            <Invoice.Text>UPI Transaction</Invoice.Text>
          </Invoice.Footer>
        </Invoice.FooterContainer>
        <Invoice.FooterContainer>
          <Invoice.Footer>
            <Invoice.Heading>Subtotal</Invoice.Heading>
            <Invoice.Text>Subtotal</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Heading>Taxes</Invoice.Heading>
            <Invoice.Text>Tax Amount</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Heading>Total</Invoice.Heading>
            <Invoice.Text>Total Amount</Invoice.Text>
          </Invoice.Footer>
        </Invoice.FooterContainer>
      </Invoice.GroupTotal>
    </Invoice>
  );
}
