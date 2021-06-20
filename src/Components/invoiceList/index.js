import React from "react";
import {
  Container,
  Title,
  Text,
  Group,
  ImpText,
  Heading,
} from "./styles/invoiceListItem";
export default function InvoiceListItem({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
InvoiceListItem.Title = function InvoiceListItemTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};
InvoiceListItem.Text = function InvoiceListItemText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>;
};
InvoiceListItem.Group = function InvoiceListItemGroup({
  children,
  ...restProps
}) {
  return <Group {...restProps}>{children}</Group>;
};
InvoiceListItem.ImpText = function InvoiceListItemImpText({
  children,
  ...restProps
}) {
  return <ImpText {...restProps}>{children}</ImpText>;
};
InvoiceListItem.Heading = function InvoiceListItemHeading({
  children,
  ...restProps
}) {
  return <Heading {...restProps}>{children}</Heading>;
};
