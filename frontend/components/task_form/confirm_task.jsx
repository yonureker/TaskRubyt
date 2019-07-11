import React from "react";
import { Link } from "react-router-dom";

class ConfirmTask extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const task = Object.assign({}, this.props.currentTask, {
      tasker_id: this.props.location.state.tasker_id
    });

    
    const {
      user_id,
      tasker_id,
      category_id,
      description,
      location,
      start_date,
      task_start_time,
      vehicle_required
    } = task; //destructuring

    const newObj = {
      user_id,
      tasker_id,
      category_id,
      description,
      location,
      start_date,
      task_start_time,
      vehicle_required
    };
    this.props.createTask(newObj).then(() => {
      this.props.history.push("/tasks");
    });
  }

  render() {
    
    return (
      <div className="taskfullpage">
        <div className="alldetails">
          <div className="field">
            Tasker
            <div className="userinput">
              {this.props.location.state.first_name}
              {this.props.location.state.last_name}
            </div>
          </div>
          {/* <img
            className="fieldphoto"
            src={this.props.location.state.tasker_photo}
          /> */}

          <div className="field">
            Tasker hourly Rate
            <div className="userinput">
              ${this.props.location.state.hourly_rate}
            </div>
          </div>

          <div className="field">
            Date
            <div className="userinput">{this.props.currentTask.task_date}</div>
          </div>

          <div className="field">
            Location
            <div className="userinput">
              {this.props.currentTask.location}
            </div>
          </div>

          {/* <div className="field">
            Duration
            <div className="userinput">
              {this.props.currentTask.task_duration}
            </div>
          </div> */}

          <div className="field">
            Description
            <div className="userinput">
              {this.props.currentTask.description}
            </div>
          </div>

          <div className="taskbutton">
            <button
              className="taskcreatebutton"
              onClick={() => this.handleSubmit()}
            >
              {" "}
              Confirm{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmTask;
