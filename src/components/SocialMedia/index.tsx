import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function SocialMedia() {
  return (
    <ul className="flex items-center  gap-3">
      <li className="text-[var(--primary-text-color)] w-9">
        <Link href="https://linkedin.com/in/felipeclarindo" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </li>
      <li className="text-[var(--primary-text-color)] w-9">
        <Link href="https://github.com/felipeclarindo" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </li>
      <li className="text-[var(--primary-text-color)] w-9">
        <Link href="https://instagram.com/lipethecoder" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </li>
      <li className="text-[var(--primary-text-color)] w-9">
        <Link href="https://mailto:fglpc2@gmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </li>
    </ul>
  );
}

export { SocialMedia };
