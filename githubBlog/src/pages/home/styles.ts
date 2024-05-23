import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 250px;
`;

export const PublicationHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 72px;

  span {
    color: ${(props) => props.theme.color["base-label"]};
    font-size: ${(props) => props.theme.font["font-size"]["textS"]};
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.color["base-input"]};
  min-width: 864px;
  margin-top: 12px;
  margin-bottom: 48px;

  padding: 16px 12px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${(props) => props.theme.color["base-border"]};

  color: ${(props) => props.theme.color["base-text"]};

  &::placeholder {
    color: ${(props) => props.theme.color["base-label"]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Publications = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;
