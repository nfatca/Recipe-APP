import styled from "styled-components";

export const Div = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  /* height: 100vh; */
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  padding-bottom: 3rem;
`;

const CardStyle = styled.div`
  margin: 2rem 0 0 0;
  width: 350px;
  box-sizing: border-box;
  height: 350px;
  background-color: lightblue;
  border-radius: 10px;
`;

export const CardTitle = styled.h4`
  margin-top: 0.5rem;
  height: 15%;
`;

export const CardImg = styled.img`
  margin: 1rem;
  width: 200px;
`;

export const Button = styled.button`
  border-radius: 10px;
  background-color: lightgoldenrodyellow;
`;

export default CardStyle;
