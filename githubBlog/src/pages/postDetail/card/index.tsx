import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionsContent, Container, Content, InfoProfile } from "./styles";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Card() {
  return (
    <Container>
      <ActionsContent>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          <span>VOLTAR</span>
        </div>
        <div>
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
        </div>
      </ActionsContent>
      <Content>
        <h1>JavaScript data types and data structures</h1>
        <InfoProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>githublogin</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </InfoProfile>
      </Content>
    </Container>
  );
}
