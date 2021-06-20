import React from "react";
import { InvoiceListContainer } from "../containers/InvoiceListContainer";
import styled from "styled-components";
import data from "../misc/data.json";
const ListContainer = styled.div`
  width: 75vw;
  margin: 40px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export function InvoiceList() {
  return (
    <ListContainer>
      {data.map((item, index) => {
        return <InvoiceListContainer key={index} data={item} />;
      })}
    </ListContainer>
  );
}
