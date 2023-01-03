import styled from "styled-components";

export const CardsBoard = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};

  & > p {
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }
`;

export const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2.5px;

  & > div:last-of-type {
    margin-bottom: 10rem;
  }
`;

export const Card = styled.div`
  width: 16rem;
  height: 310px;
  background-color: ${(props) => props.theme["base-card"]};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 120px;
    margin-top: -20px;
    margin-bottom: 0.75rem;
    background-color: transparent;
  }

  & > span {
    margin-bottom: 1rem;
    text-transform: uppercase;
    height: 21px;
    padding: 0 0.5rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    border-radius: calc(21px / 2);
    line-height: 1.3;
    font-size: 0.625rem;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p:first-of-type {
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & p:last-of-type {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 2rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;

export const CardPanel = styled.div`
  height: 38px;
  line-height: 1.3;

  display: flex;
  align-items: center;
  justify-content: center;

  & > div:nth-child(1) {
    margin-left: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    margin-right: 23px;

    & span:nth-child(1) {
      color: ${(props) => props.theme["base-text"]};
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
    }
    & span:nth-child(2) {
      color: ${(props) => props.theme["base-text"]};
      font-family: "Baloo 2", "Roboto", sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }

  & > button {
    padding: 0.5rem;
    background-color: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    border: none;
    margin-left: 0.5rem;
    margin-right: 24px;
    height: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme["base-card"]};
    }

    &:hover {
      background-color: ${(props) => props.theme["purple"]};
    }
  }
`;
