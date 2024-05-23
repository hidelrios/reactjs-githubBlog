import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 864px;
  height: 212px;
  gap: 32px;
  padding: 40px;
  margin-top: -50px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => props.theme.color["base-profile"]};

  &:first-child {
    display: flex;
    flex-direction: column;
  }

  p {
    margin-top: 8px;
    margin-bottom: 24px;
  }

  img {
    width: 148px;
    height: auto;
    border-radius: 10px;
  }
`;

export const Github = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 8px;

  color:  ${(props) => props.theme.color["blue"]};
  cursor: pointer;
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
