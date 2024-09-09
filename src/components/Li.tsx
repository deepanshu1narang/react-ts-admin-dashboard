import { Link, Location } from "react-router-dom";
import { IconType } from "react-icons";

interface LiProps {
  url: string;
  text: string;
  Icon: IconType;
  location: Location;
}
const Li = ({ url, Icon, text, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "rgba(0, 115, 225, 0.1)" : "white",
    }}
  >
    <Link to={url}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default Li;
export type { LiProps };
