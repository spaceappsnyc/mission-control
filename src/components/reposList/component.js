import React, { Component } from 'react';
import { Paper } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class ReposList extends Component {
  static defaultProps = {
    items: []
  }

  componentDidMount() {
    this.fetchRepos();
  }

  componentWillReceiveProps(props) {
    this.fetchRepos(props);
  }

  fetchRepos(props = this.props) {
    if (props.didInvalidate && !props.isFetching) {
      this.props.fetchRepos();
    }
  }

  render() {
    return (
      <Paper style={this.props.style}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Repos" />
          </ToolbarGroup>
        </Toolbar>
        <div>{this.props.error}</div>
        {this.props.items.map((repo, index) => (
          <Card key={index}>
            <CardTitle
              title={repo.name}
              subtitle={repo.homepage}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>{repo.description}</CardText>
            <CardActions expandable={true}>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
        ))}
      </Paper>
    );
  }
}
