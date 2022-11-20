import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(40% - 8rem);
  /* margin-top: 50%; */
`;

export const Link = styled.a`
  font-size: 3rem;
  color: ${({ blue }) => blue || "#171515"};
`;
export default Div;
