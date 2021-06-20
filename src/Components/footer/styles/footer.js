import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-height: 8vh;
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.1;
  color: white;

  @media (max-width: 750px) {
    font-size: 10px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  color: white;
  @media (max-width: 750px) {
    font-size: 8px;
  }
`;
