import { connect } from "react-redux";
import { createTask } from "../../actions/task_actions";
import ConfirmTask from "./confirm_task";

const mapStateToProps = state => {
  return {
    currentTask: state.currentTask
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmTask);
