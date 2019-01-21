import { connect } from "react-redux";
import Component from "./component";

import { requestMembers } from "../../store/members";

export const mapStateToProps = state => state.members;

export const mapDispatchToProps = {
  requestMembers
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  requestMembers: () => {
    if (stateProps.didInvalidate && !stateProps.isFetching) {
      dispatchProps.requestMembers();
    }
  },
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Component);
