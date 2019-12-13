import React from "react";
import merge from "lodash/merge";

class ConfirmTask extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    const taskToSubmit = merge({}, this.props.currentTask, {
      tasker_id: this.props.location.state.tasker_id
    });

    this.props.createTask(taskToSubmit).then(() => {
      this.props.history.push("/mytasks");
    });
  }

  render() {
    return (
      <div className="confirm-task-page">
        <div className="task-details-container">
          <div className="task-details-top">
            <div className="tasker-name-details">
              <div className="tasker-details-title2">
                <strong>Tasker:</strong>
              </div>
              <br />
              {this.props.location.state.first_name +
                " " +
                this.props.location.state.last_name[0]}
            </div>

            <div className="tasker-photo">
              <img
                className="tasker-photo-detail"
                src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_300,w_300/v1551542728/otmnjrkkjmvapnhmjr9k.jpg"
              />
            </div>
          </div>

          <div className="task-details-middle">
            <ul>
              <li>
                <div className="tasker-details-title2">
                  <strong>Date & Time:</strong>
                </div>
                <br /> {this.props.currentTask.task_date} at{" "}
                {this.props.currentTask.task_start_time}
                <br />
                <br />
              </li>
              <li>
                <div className="tasker-details-title2">
                  <strong>Location:</strong>
                </div>
                <br />
                {this.props.currentTask.location}
              </li>
            </ul>
          </div>

          <div className="task-details-bottom">
            <div className="tasker-details-title2">
              <strong>Hourly Rate:</strong>
            </div>
            <br /> ${this.props.location.state.hourly_rate}/hr
            <br />
            <br />
            <div className="task-confirm-snippet">
              A 15% Trust and Support fee is added to the Tasker’s total rate.
              <br />
              <br />
              You will not be charged until your task is complete. Tasks have a
              one-hour minimum. You can cancel or reschedule anytime. If you
              cancel your task within 24 hours of the scheduled start time, you
              may be charged a one-hour cancellation fee at the Tasker's hourly
              rate.
            </div>
            <div className="taskbutton">
              <button
                className="tasker-select-button"
                onClick={() => this.handleSubmit()}
              >
                {" "}
                Confirm{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmTask;
