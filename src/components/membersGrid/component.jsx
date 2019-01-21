import React, { Component } from "react";
import { Paper } from "material-ui";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { GridList, GridTile } from "material-ui/GridList";

export default class MembersGrid extends Component {
  static defaultProps = {
    items: []
  };

  componentDidMount() {
    this.props.requestMembers();
  }

  componentWillReceiveProps(props) {
    props.requestMembers();
  }

  render() {
    return (
      <Paper style={this.props.style}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Members" />
          </ToolbarGroup>
        </Toolbar>
        <div>{this.props.error}</div>
        <GridList cellHeight={180}>
          {this.props.items.map((person, index) => (
            <GridTile key={index} title={person.login}>
              <img src={person.avatar_url} alt="foo" />
            </GridTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}
