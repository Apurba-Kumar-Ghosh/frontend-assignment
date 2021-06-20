import React from "react";
import {
  Container,
  Header,
  Title,
  Address,
  Text,
  ListItem,
  Group,
  GroupTotal,
  Footer,
  Heading,
  Billing,
  List,
  SubText,
  FooterContainer,
  Description,
  Units,
  Frame,
  Input,
} from "./styles/invoice";

export default function Invoice({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
Invoice.Header = function InvoiceHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
Invoice.Title = function InvoiceTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Invoice.Text = function InvoiceText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Invoice.Address = function InvoiceAddress({ children, ...restProps }) {
  return <Address {...restProps}>{children}</Address>;
};
Invoice.ListItem = function InvoiceLineItem({ children, ...restProps }) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
Invoice.SubText = function InvoiceSubText({ children, ...restProps }) {
  return <SubText {...restProps}>{children}</SubText>;
};
Invoice.Group = function InvoiceGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Invoice.Heading = function InvoiceHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};
Invoice.Billing = function InvoiceBilling({ children, ...restProps }) {
  return <Billing {...restProps}>{children}</Billing>;
};
Invoice.List = function InvoiceList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Invoice.Footer = function InvoiceFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};
Invoice.GroupTotal = function InvoiceGroupTotal({ children, ...restProps }) {
  return <GroupTotal {...restProps}>{children}</GroupTotal>;
};
Invoice.Description = function InvoiceDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
Invoice.Units = function InvoiceUnits({ children, ...restProps }) {
  return <Units {...restProps}>{children}</Units>;
};
Invoice.FooterContainer = function InvoiceFooterContainer({
  children,
  ...restProps
}) {
  return <FooterContainer {...restProps}>{children}</FooterContainer>;
};
Invoice.Frame = function InvoiceFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Invoice.Input = function InvoiceInput({ ...restProps }) {
  return <Input {...restProps} />;
};
