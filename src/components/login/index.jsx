import React, { Component } from "react";
import { Dialog } from "material-ui";

import Authenticate from "../authenticate";

export default class Login extends Component {
  // componentDidMount() {
  //   const options = {
  //     mode: "cors",
  //     headers: {
  //       "content-type": "application/json"
  //       // 'x-api-key': 'GjTodzcmQk8JOLKGo7TTi275TA03LctJ1fZ2HVBk'
  //     }
  //   };
  //   // fetch('https://6b04dlajxh.execute-api.us-west-2.amazonaws.com/prod/authenticateWithGithub', options)
  //   //   .then(response => response.text())
  //   //   .then(response => console.log(response))
  //   //   .catch(response => console.log(response))
  //   fetch(
  //     "https://github.com/login/oauth/authorize?client_id=d4fb9d5600925b740eb5",
  //     options
  //   );
  // }

  render() {
    return (
      <div>
        <Dialog
          title="Authenticate"
          actions={[<Authenticate />]}
          modal={false}
          open
        >
          Authenticate with Github
        </Dialog>
      </div>
    );
  }
}
