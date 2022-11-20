import styled from "styled-components";

export const Div = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  /* height: 100vh; */
  height: calc(100vh - 8rem);
`;
const DetailStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  /* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); */

  ul {
    list-style-type: none;
    text-align: end;
  }
`;

export const DetailImg = styled.img`
  margin: 0 2rem;
  width: 280px;
  border-radius: 10px;
`;

export const DetailButton = styled.button`
  display: block;
  width: 100px;
  margin: 0.5rem auto;
`;

export default DetailStyle;
