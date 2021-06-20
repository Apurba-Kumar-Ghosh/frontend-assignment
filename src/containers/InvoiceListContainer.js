import React from "react";
import InvoiceListItem from "../Components/invoiceList";

export function InvoiceListContainer({ children, data, ...restProps }) {
  return (
    <InvoiceListItem>
      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>INVOICE OF :</InvoiceListItem.Heading>
        <InvoiceListItem.Title>{data.Name}</InvoiceListItem.Title>
      </InvoiceListItem.Group>

      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>Due Date :</InvoiceListItem.Heading>
        <InvoiceListItem.ImpText>{data.dueDate}</InvoiceListItem.ImpText>
      </InvoiceListItem.Group>
      <InvoiceListItem.Group>
        <InvoiceListItem.Heading>Amount Due :</InvoiceListItem.Heading>
        <InvoiceListItem.Text>Rs. {data.amt}</InvoiceListItem.Text>
      </InvoiceListItem.Group>
    </InvoiceListItem>
  );
}
