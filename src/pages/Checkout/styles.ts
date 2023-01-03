import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 104px);
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};

  display: flex;
  gap: 2rem;
`;
