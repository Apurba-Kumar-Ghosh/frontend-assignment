import React from "react";
import InvoiceListItem from "../Components/invoiceList";

export function InvoiceListContainer({ children, data,show, ...restProps }) {
  return (
    <InvoiceListItem>
      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>INVOICE OF :</InvoiceListItem.Heading>
        <InvoiceListItem.Title>{data.Name}</InvoiceListItem.Title>
      </InvoiceListItem.Group>

      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>Issue Date :</InvoiceListItem.Heading>
        <InvoiceListItem.Text>{data.date}</InvoiceListItem.Text>
      </InvoiceListItem.Group>
      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>Due Date :</InvoiceListItem.Heading>
        <InvoiceListItem.ImpText>Rs. {data.dueDate}</InvoiceListItem.ImpText>
      </InvoiceListItem.Group>
    </InvoiceListItem>
  );
}
