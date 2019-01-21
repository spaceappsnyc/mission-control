import React from "react";
import { FlatButton, FontIcon } from "material-ui";

export default () => (
  <FlatButton
    label="Authenticate"
    icon={<FontIcon className="muidocs-icon-custom-github" />}
    href={process.env.REACT_APP_AUTH_URL}
  />
);
