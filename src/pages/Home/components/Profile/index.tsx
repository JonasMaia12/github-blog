import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLink"
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons"

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/JonasMaia12.png" />
      <ProfileDetails>
        <header>
          <h1>Jonas Maia</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          I'm a software engineer with a passion for creating beautiful and
          efficient user interfaces. I'm currently working remotely on a project
          that involves designing and implementing a new digital platform.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            JonasMaia12
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />3 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
