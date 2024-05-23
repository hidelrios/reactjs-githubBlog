import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 864px;
  height: 212px;
  gap: 32px;
  padding: 40px;
  margin-top: -50px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => props.theme.color["base-profile"]};
  
  `;

export const ActionsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    color: ${(props) => props.theme.color["blue"]};

    
  }
`;

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  color: ${(props) => props.theme.color["base-span"]};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 24px;

`;
