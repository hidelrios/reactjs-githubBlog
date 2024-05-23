import { useContext } from "react";
import { Header } from "../../components/header";
import { Post } from "../../components/post";
import { Profile } from "./components/profile";
import {
  Container,
  PublicationHeader,
  Publications,
  TextInput,
} from "./styles";
import { GitContext } from "../../contexts/GitProvider";

export function Home() {
  const { issues } = useContext(GitContext);

  return (
    <Container>
      <Header />
      <Profile />
      <div>
        <PublicationHeader>
          <h3>Publicações</h3>
          <span>{issues.total_count} publicações</span>
        </PublicationHeader>

        <div>
          <form action="">
            <TextInput placeholder="Buscar conteúdo" />
          </form>
        </div>
        <Publications>
          {issues && issues.items && issues.items.length > 0 ? (
            issues.items.map((issue) => (
              <Post
                key={issue.id}
                id={issue.id}
                body={issue.body}
                created_at={issue.created_at}
                title={issue.title}
              />
            ))
          ) : (
            <p>No issues found.</p>
          )}
        </Publications>
      </div>
    </Container>
  );
}
