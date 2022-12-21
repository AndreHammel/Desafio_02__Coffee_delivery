import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 34rem;
  display: flex;
  justify-content: space-between;

  & > img {
    margin: 5.75rem 0;
  }
`
export const Content = styled.div`
  min-width: 588px;
  padding: 94px 0 108px 0;
  margin-right: 56px;
  line-height: 1.3;

  & p:first-of-type {
    font-size: 3rem;
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-weight: 800;
    color: ${props => props.theme['base-title']}
  }

  & p:last-of-type {
    font-size: 1.25rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme['base-subtitle']}
  }
`
export const ContentTopics = styled.div`
  margin-top: 66px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 0px;
  & > div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .topic {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme['background']}
  }
  
  .topic__shopping-cart {
    background-color: ${props => props.theme['yellow-dark']};
  }

  .topic__package {
    background-color: ${props => props.theme['base-text']};
  }

  .topic__timer {
    background-color: ${props => props.theme['yellow']};
  }

  .topic__coffee {
    background-color: ${props => props.theme['purple']};
  }

`