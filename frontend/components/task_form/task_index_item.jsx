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
    return (
      <div className="taskitem task-details-container">

<div className="confirm-task-page">
        <div className="task-details-container">
          <div className="task-details-top">
            <div className="tasker-name-details">
              <div className="tasker-details-title2">
              <strong>Tasker:</strong>
              </div>
              <br />
              {this.props.task.first_name +
                " " +
                this.props.task.last_name[0]}
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
                <br /> {this.props.task.task_date} at{" "}
                {this.props.task.task_start_time}
                < br/>
                < br/>
              </li>
              <li>
              <div className="tasker-details-title2">
                <strong>Location:</strong>
                </div>
                <br />
                {this.props.task.location}
              </li>
            </ul>
          </div>

          <div className="task-details-bottom">
          <div className="tasker-details-title2">
            <strong>Hourly Rate:</strong>
            </div>
            <br /> ${this.props.task.hourly_rate}/hr
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

        {/* <div className="field">
          Tasker
          <div className="userinput">
            {this.props.task.first_name} {this.props.task.last_name}
          </div>
        </div>
        <img className="itemphoto" src={this.props.task.tasker_photo} />

        <div className="field">
          Tasker Contact
          <div className="userinput">{this.props.task.contact}</div>
        </div>

        <div className="field">
          Location
          <div className="userinput">{this.props.task.location}</div>
        </div>

        <div className="field">
          Duration
          <div className="userinput">{this.props.task.task_duration}</div>
        </div>

        <div className="field">
          Description
          <div className="userinput">{this.props.task.description}</div>
        </div> */}

        <div className="taskbutton">
          <button
            className="task-form button"
            onClick={() => this.props.deleteTask(this.props.task.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default TaskIndexItem;
