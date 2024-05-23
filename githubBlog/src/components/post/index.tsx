import { useContext } from "react";
import { Container, Description, Title } from "./styles";

interface Post {
  id: number;
  title: string;
  created_at: string;
  body: string;
}
export function Post({id,title,created_at,body}: Post) {
  return (
    <Container key={id}>
    <Title>
      <h3>{title}</h3>
      <span>{new Date(created_at).toLocaleDateString()}</span>
    </Title>
    <Description>
      <p>{body}</p>
    </Description>
  </Container>
  );

}
