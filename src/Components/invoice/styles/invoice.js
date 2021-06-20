import styled from "styled-components";

export const Container = styled.section`
  width: 55vw;
  height: 80vh;
  margin: 0 auto;
  margin-top : 30px;
  font-size: 14px;
  box-shadow: 2px 1px 5px 8px rgba(0, 0, 0, 0.41);
  -webkit-box-shadow: 2px 1px 5px 8px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 2px 1px 5px 8px rgba(0, 0, 0, 0.41);
`;
export const Input = styled.input`
  width: 125px;
  height: 30px;
`;
export const Header = styled.div`
  display: flex;
  background: skyblue;
  width: 100%;
  min-height: 50px;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 20px;
`;
export const Title = styled.h1`
  font-size: 26px;
`;
export const Text = styled.p`
  font-weight: bold;
`;
export const Address = styled.div`
  ${Text} {
    padding: 1px;
    margin: 0;
  }
  ${Input} {
    max-width: 250px;
    height: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid skyblue;
  padding-bottom: 20px;
`;
export const GroupTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5px;
  border-bottom: 1px solid black;
`;
export const Heading = styled.p`
  color: skyblue;
  font-size: 16px;
  font-weight: 700;
`;
export const Billing = styled.div``;
export const SubText = styled.p`
  font-size: 10px;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
`;
export const Description = styled.div`
  text-align: left;
  flex-basis: 50%;
  ${Input} {
    width: 250px;
  }
`;
export const Units = styled.div`
  text-align: left;
`;
export const Frame = styled.div`
  padding: 0 20px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 40px;

  &: nth-of-type(3) {
    border-top: 2px solid skyblue;
  }
`;

{
  /* Container,
  Header,
  Title,
  Address,
  Text,
  LineItem,
  Group,
  GroupTotal,
  Footer,
  Heading,
  Billing,
  List,
  SubText*/
}
