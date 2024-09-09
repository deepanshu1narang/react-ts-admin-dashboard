import { Nav } from "../pages/AdminSideBar";
import { Location } from "react-router-dom";
import Li from "./Li";
import { Dispatch } from "react";

interface AsideDivProps {
  nav: Nav[];
  h5: string;
  location: Location;
  phoneActive?: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

const AsideDiv = ({ nav, h5, location, phoneActive, setShowModal }: AsideDivProps) => (
  <div>
    <h5>{h5}</h5>
    <ul>
      {nav.map((e) => (
        <Li key={e.id} url={e.url} Icon={e.Icon} text={e.text} location={location} />
      ))}
    </ul>
    {phoneActive && (
      <button id="close-sidebar" onClick={() => setShowModal(false)}>
        Close
      </button>
    )}
  </div>
);

export default AsideDiv;
