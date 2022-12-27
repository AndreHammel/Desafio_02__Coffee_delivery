import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};

  display: flex;
  gap: 2rem;
`;

export const ContainerForm = styled.div`
  width: 40rem;
`;

export const ContainerOrder = styled.div`
  width: 28rem;
`;

export const TitleContainer = styled.div`
  font-family: "Baloo 2", "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const ContainerFormContent = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  & + div {
    margin-top: 0.75rem;
  }
`;

export const FormContent = styled.div`
  width: 35rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px 0;
`;

export const FormHeaderInfo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;

  & svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > span:first-of-type {
      font-size: 1rem;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
    }

    & > span:last-of-type {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 1.3;
    }
  }
`;

export const FormAddressInfo = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input {
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    height: 2rem;
    border-radius: 4px;
    padding: 0.75rem;
  }

  & input:nth-child(1) {
    width: 200px;
  }

  & > div {
    display: flex;
    gap: 0.75rem;
  }

  & div:first-of-type {
    & input:last-of-type {
      flex: 1;
    }
  }

  & div:last-of-type {
    & input:nth-child(2) {
      flex: 1;
    }
    & input:nth-child(3) {
      width: 3.75rem;
    }
  }
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["base-text"]};
  padding: 1rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  font-size: 0.75rem;
  text-transform: uppercase;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
  & svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const OrderContainer = styled.div`
  background-color: aquamarine;
  min-width: 28rem;
  height: auto;
  margin-top: 40px;

  & > p {
    font-family: "Baloo 2", "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
  }
`;
