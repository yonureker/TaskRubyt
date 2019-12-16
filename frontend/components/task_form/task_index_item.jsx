import React from "react";
import { Link } from "react-router-dom";

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const task = Object.assign({}, this.props.currentTask, {
      tasker_id: this.props.location.state.tasker_id
    });
    const { tasker_id, location, description } = task;
    const newObj = { tasker_id, location, description };
    this.props.createTask(newObj).then(() => {
      this.props.history.push("/tasks");
    });
  }

  render() {
    console.log(this.props.task);

    return (
      <div className="taskitem task-details-container">
        <div className="field">
          <strong>Tasker ID:</strong>
          <div className="userinput">{this.props.task.tasker_id}</div>
        </div>

        <div className="field">
          <strong>Category ID:</strong>
          <div className="userinput">{this.props.task.category_id}</div>
        </div>

        <div className="field">
          <strong>Location:</strong>
          <div className="userinput">{this.props.task.location}</div>
        </div>
        <br />
        <div className="field">
          <strong>Date:</strong>
          <div className="userinput">{this.props.task.task_date}</div>
        </div>
        <br />
        <div className="field">
          <strong>Description:</strong>
          <div className="userinput">{this.props.task.description}</div>
        </div>
        <br />
        <div className="continue">
          <button
            className="cancel-button"
            color="white"
            onClick={() => this.props.deleteTask(this.props.task.id)}
          >
            Cancel Task
          </button>
        </div>
      </div>
    );
  }
}

export default TaskIndexItem;
