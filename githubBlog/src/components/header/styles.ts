import styled from "styled-components";
import COVER from "../../assets/cover.svg";

export const Container = styled.header`
  min-width: 1440px;
  width: 100%;
  height: 296px;
  background-image: url("${COVER}");
  background-size: cover;
`;
