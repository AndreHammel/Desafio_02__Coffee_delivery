import styled from "styled-components";

export const HeaderFixed = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};
`;

export const HeaderContainer = styled.header`
  max-width: 70rem;
  margin: 0 auto;
  height: 104px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    height: 2.5rem;
  }

  & > div {
    height: 38px;
    display: flex;
    gap: 12px;
  }
`;

export const MapIndicator = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  & svg {
    color: ${(props) => props.theme["purple"]};
  }
`;
export const ShoppingCartIndicator = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;

  & svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AmountInCartIndicator = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  top: -8px;
  left: 26.35px;

  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;
