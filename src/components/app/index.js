import { connect } from "react-redux";
import Component from "./component";
import { push } from "connected-react-router";

export const mapStateToProps = state => state.auth;

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(push("/logout"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
