import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 416px;
  height: 260px;
  border-radius: 10px;
  padding: 20px 16px;

  background-color: ${(props) => props.theme.color["base-post"]};
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  
  h3 {
    width: 283px;
    font-size: ${(props) => props.theme.font["font-size"]["textXL"]};
    color: ${(props) => props.theme.color["base-title"]};
  }

  span {
    color: ${(props) => props.theme.color["base-span"]};
    font-size: ${(props) => props.theme.font["font-size"]["textS"]};
    text-align: right;
  }
`;

export const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
  p {
    font-size: ${(props) => props.theme.font["font-size"]["textM"]};
    color: ${(props) => props.theme.color["base-span"]};
    text-align: justify;
  }
`;
