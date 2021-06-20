import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  height: 200px;
  box-shadow: 2px 14px 42px 5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 14px 42px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 14px 42px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin: 20px 0;
`;
export const Title = styled.h1`
  font-size: 30px;
  color: skyblue;
`;
export const Group = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: baseline;
`;
export const Text = styled.p`
  font-weight: bold;
`;
export const Heading = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
export const ImpText = styled.p`
  color: red;
  font-weight: bold;
`;
