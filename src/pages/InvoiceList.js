import React, { useContext } from "react";
import { InvoiceListContainer } from "../containers/InvoiceListContainer";
import styled from "styled-components";
import { FirebaseContext } from "../firebase";
const ListContainer = styled.div`
  width: 75vw;
  margin: 40px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export function InvoiceList() {
  const { firebase } = useContext(FirebaseContext);
  const [database, setData] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("Invoices")
      .get()
      .then((querySnapshot) => {
        const array = []
        querySnapshot.forEach((doc,index) => {
          const item = doc.data()
          setData(prevData => [...prevData,item])
          console.log(database)
          console.log(item.Name);
          console.log(item.amt)
        });
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <ListContainer>
      {database.map((item, index) => {
        return <InvoiceListContainer key={index} data={item} />;
      })}
    </ListContainer>
  );
}
