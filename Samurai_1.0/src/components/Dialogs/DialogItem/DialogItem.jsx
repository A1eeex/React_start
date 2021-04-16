import { NavLink } from "react-router-dom";
import css_mod_dialogs from "../Dialogs.module.css";
import css_mod_dialogsItem from "./DialogsItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={css_mod_dialogsItem.dialogsItem_wrapper}>
      <div className={css_mod_dialogsItem.dialogsPhoto}>
        <img src="https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-13.jpg" alt="DIALOG_PHOTO"/>
      </div>
      <NavLink activeClassName={css_mod_dialogs.activeLinc} to={path}>{props.name} </NavLink>
    </div>
  );
};
export default DialogItem