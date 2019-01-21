import { connect } from "react-redux";
import Component from "./component";

import { requestRepos } from "../../store/repos";

export const mapStateToProps = state => ({ ...state.repos });

export const mapDispatchToProps = {
  requestRepos
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  requestRepos: () => {
    if (stateProps.didInvalidate && !stateProps.isFetching) {
      dispatchProps.requestRepos();
    }
  },
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
