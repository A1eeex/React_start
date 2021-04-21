import React from 'react';
import css_mod_siteBar from "./SiteBar.module.css"

const SiteBar = (props) => {
  return (
    <div>
      <div className={css_mod_siteBar.siteBar}>
        <img src="https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-13.jpg" alt="siteBar_photo"/>
        {props.users}
      </div>
    
    </div>
  );
};

export default SiteBar;