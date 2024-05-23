import { Container, Github, InfoProfile } from "./styles";
import PROFILE from "../../../../assets/profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GitContext } from "../../../../contexts/GitProvider";

export function Profile() {
  const { user } = useContext(GitContext);

  return (
    <Container>
      <img src={user.avatar_url} alt="" />
      <div>
        <Github>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm"/>
          <span>GITHUB</span>
        </Github>
        <h1>{user.name}</h1>

        <p>{user.bio}</p>

        <InfoProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} /> <span>{user.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} /> <span>{user.followers}</span>
          </div>
        </InfoProfile>
      </div>
    </Container>
  );
}
