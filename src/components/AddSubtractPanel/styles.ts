import styled from "styled-components";

export const Panel = styled.div`
  height: 38px;
  line-height: 1.3;
  width: 72px;
  height: 100%;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme["purple-light"]};

  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    width: 100%;
    border: none;
    padding: 0.25rem;
    text-align: center;
    background-color: transparent;
    color: ${(props) => props.theme["base-title"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
  }

  //>> remove setas para cima e baixo no campo input do tipo número
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button,
  input[type="number"] {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }

  & button {
    border: none;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;

    & svg {
      color: ${(props) => props.theme["purple"]};

      &:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }

  & button:first-of-type {
    margin-left: 0.5rem;
  }

  & button:last-of-type {
    margin-right: 0.5rem;
  }
`;
