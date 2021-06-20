import React from "react";
import Invoice from "../Components/invoice/index";

export function NewInvoiceContainer({ data }) {
  const totalHours =
    parseInt(data.hoursOne) +
    parseInt(data.hoursTwo) +
    parseInt(data.hoursThree);
  const amount = totalHours * 1000;
  const taxes = 0.15 * amount;
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
            <Invoice.Text>{data.Name}</Invoice.Text>
            <Invoice.Text>{data.firstLine}</Invoice.Text>
            <Invoice.Text>
              {data.city},{data.state}
            </Invoice.Text>
            <Invoice.Text>{data.zipCode}</Invoice.Text>
          </Invoice.Address>
        </Invoice.Frame>
        <Invoice.Frame>
          <Invoice.Frame>
            <Invoice.SubText>Invoice Number</Invoice.SubText>
            <Invoice.Text>00000000</Invoice.Text>
          </Invoice.Frame>
          <Invoice.Frame>
            <Invoice.SubText>Date of Issue</Invoice.SubText>
            <Invoice.Text>{data.date}</Invoice.Text>
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
            <Invoice.Text>{data.workOne}</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs 1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{data.hoursOne}</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{1000 * data.hoursOne}</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Text>{data.workTwo}</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs 1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{data.hoursTwo}</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{1000 * data.hoursTwo}</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
        <Invoice.ListItem>
          <Invoice.Description>
            <Invoice.Text>{data.workThree}</Invoice.Text>
          </Invoice.Description>
          <Invoice.Units>
            <Invoice.Text>Rs 1000</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{data.hoursThree}</Invoice.Text>
          </Invoice.Units>
          <Invoice.Units>
            <Invoice.Text>{1000 * data.hoursThree}</Invoice.Text>
          </Invoice.Units>
        </Invoice.ListItem>
      </Invoice.List>
      <Invoice.GroupTotal>
        <Invoice.FooterContainer>
          <Invoice.Footer>
            <Invoice.Text>Due Date :</Invoice.Text>
            <Invoice.Text>2021/08/25</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Text>Pay through :</Invoice.Text>
            <Invoice.Text>UPI Transaction</Invoice.Text>
          </Invoice.Footer>
        </Invoice.FooterContainer>
        <Invoice.FooterContainer>
          <Invoice.Footer>
            <Invoice.Heading>Subtotal</Invoice.Heading>
            <Invoice.Text>{amount}</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Heading>Taxes</Invoice.Heading>
            <Invoice.Text>{taxes}</Invoice.Text>
          </Invoice.Footer>
          <Invoice.Footer>
            <Invoice.Heading>Total</Invoice.Heading>
            <Invoice.Text>{amount + taxes}</Invoice.Text>
          </Invoice.Footer>
        </Invoice.FooterContainer>
      </Invoice.GroupTotal>
    </Invoice>
  );
}
