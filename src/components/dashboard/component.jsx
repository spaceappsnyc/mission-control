import React, { Component } from "react";

import MembersGrid from "../membersGrid";
import ReposList from "../reposList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <MembersGrid
          style={{
            width: "40em",
            float: "left"
          }}
        />
        <ReposList
          style={{
            width: "calc(100% - 40em)",
            float: "left"
          }}
        />
      </div>
    );
  }
}
