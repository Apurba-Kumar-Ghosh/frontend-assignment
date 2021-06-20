import React, {useContext} from "react";
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
export function PendingInvoiceList() {
    const { firebase } = useContext(FirebaseContext);
    const [database, setData] = React.useState([]);
    const db = firebase.firestore();
    const newDate = new Date()
    function makeNewData() {
        const newData = database.filter((item) => {
          const date = new Date(item.dueDate);
          console.log(date);
          if (newDate > date) {
            console.log(true);
            return true;
          } else return false;
        });
        return newData
    }
    React.useEffect(() => {
      db.collection("Invoices")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc, index) => {
            const item = doc.data();
            setData((prevData) => [...prevData, item]);
          });
        })
            .catch((error) => console.log(error.message));
        
        const filteredData = makeNewData()
        setData(filteredData)
    }, []);
  return (
    <ListContainer>
      {database.map((item, index) => {
        return <InvoiceListContainer key={index} data={item} />;
      })}
    </ListContainer>
  );
}
