import { NavLink } from "react-router-dom";
import css_mod_dialogs from "../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div>
      <NavLink activeClassName={css_mod_dialogs.activeLinc} to={path}>{props.name} </NavLink>
    </div>
  );
};
export default DialogItem