import styled from "styled-components";

export const TitleContainer = styled.div`
  font-family: "Baloo 2", "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const ContainerOrder = styled.div`
  width: 28rem;
`;

export const ContainerOrderContent = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
`;

export const OrderContent = styled.div`
  width: 23rem;
  margin: 0 auto;
  padding: 40px 0;

  & > hr {
    border: 0.5px solid ${(props) => props.theme["base-button"]};
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & > button:last-of-type {
    width: 100%;
    border: none;
    height: 46px;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 6px;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 61px;

  & img {
    width: 4rem;
    margin-right: 1.25rem;
  }

  & > div:first-of-type {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const CardPanel = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 0.5rem;
  margin-right: 45px;

  & > button:last-of-type {
    max-width: 91px;
    background-color: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    font-size: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    padding: 6.5px 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }

    & svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const Price = styled.div`
  height: 100%;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
`;

interface BillProps {
  variant?: "bold";
}

export const BillContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const Bill = styled.div<BillProps>`
  display: flex;
  justify-content: space-between;

  font-size: ${({ variant }) => (variant === "bold" ? "1.25rem" : "0.875rem")};
  font-weight: ${({ variant }) => (variant === "bold" ? 700 : 400)};

  & > span:last-of-type {
    font-size: ${({ variant }) => (variant === "bold" ? "1.25rem" : "1rem")};
  }
`;
