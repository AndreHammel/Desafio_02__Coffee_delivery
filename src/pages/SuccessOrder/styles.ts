import styled from "styled-components";

export const SuccessOrderContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 104px);
  margin: 0 auto;
  background-color: ${(props) => props.theme.background};
`;

export const SuccessOrderContent = styled.div`
  width: 526px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  & > span:first-of-type {
    color: ${(props) => props.theme["yellow-dark"]};
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }

  & > span:last-of-type {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Robot";
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;

    margin-bottom: 40px;
  }

  & > div {
    width: 100%;
    border-radius: 6px 36px 6px 36px;
    padding: 40px;

    background: linear-gradient(#fafafa, #fafafa) padding-box,
      linear-gradient(135deg, #dbac2c, #8047f8) border-box;
    border: 1px solid transparent;
  }
`;

interface TopicsProps {
  bgColor: "purple-dark" | "yellow-dark" | "yellow";
}

export const Topics = styled.div<TopicsProps>`
  max-width: 354px;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;

  margin-bottom: 2rem;

  & > div:first-of-type {
    background-color: ${(props) => props.theme[props.bgColor]};
    min-width: 2rem;
    height: 2rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    color: ${(props) => props.theme["background"]};
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 382px;
  margin-top: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    align-self: flex-end;
    margin-bottom: -15px;
  }
`;
