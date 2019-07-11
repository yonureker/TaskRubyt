import React from "react";
import merge from 'lodash/merge';
import NavBarContainer from '../navbar/navbar_container';

class ConfirmTask extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {

    const taskToSubmit = merge({}, this.props.currentTask, { tasker_id: this.props.location.state.tasker_id })
    // const task = Object.assign({}, this.props.currentTask, {
    //   tasker_id: this.props.location.state.tasker_id
    // });
    
    // const {
    //   user_id,
    //   tasker_id,
    //   category_id,
    //   description,
    //   location,
    //   task_date,
    //   task_start_time,
    //   vehicle_required
    // } = task; //destructuring

    // const newObj = {
    //   user_id,
    //   tasker_id,
    //   category_id,
    //   description,
    //   location,
    //   task_date,
    //   task_start_time,
    //   vehicle_required
    // };
    this.props.createTask(taskToSubmit).then(() => {
      this.props.history.push("/mytasks");
    });
  }

  render() {
    
    return (
      <div className="confirm-task-page">
        <NavBarContainer />
        <div className="task-details-container">
          {/* <div className="name field">
            <div className="task-icon">
            Tasker
            </div>
            <div className="userinput">
              {this.props.location.state.first_name}
              {this.props.location.state.last_name}
            </div>
          </div>

          <div className="rate field">
          <div className="task-icon">
            Tasker hourly Rate
            </div>
            <div className="userinput">
              ${this.props.location.state.hourly_rate}
            </div>
          </div>

          <div className="date field">
            <div className="task-icon">
            Date
            </div>
            <div className="userinput">{this.props.currentTask.task_date} at {this.props.currentTask.task_start_time}</div>
          </div>

          <div className="location field">
          <i className="fas fa-map-marker-alt"></i>
            <div className="userinput">
              {this.props.currentTask.location}
            </div>
          </div>

          <div className="description field">
          <div className="task-icon">
            Description
            </div>
            <div className="userinput">
              {this.props.currentTask.description}
            </div>
          </div>

          <div className="taskbutton">
            <button
              className="tasker-select-button"
              onClick={() => this.handleSubmit()}
            >
              {" "}
              Confirm{" "}
            </button>
          </div> */}


          <div className="task-details-top">
            <div className="tasker-name-details">
              <strong>Tasker:</strong>
              <br />
              {this.props.location.state.first_name + ' ' + this.props.location.state.last_name[0] } 
            </div>

            <div className="tasker-photo">
               <img className="tasker-photo-detail" src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_300,w_300/v1551542728/otmnjrkkjmvapnhmjr9k.jpg"/>
            </div>
          </div>

          <div className="task-details-middle">
            <ul>
              <li><strong>Date & Time:</strong> {this.props.currentTask.task_date} at {this.props.currentTask.task_start_time}</li>
              <li><strong>Location:</strong> {this.props.currentTask.location}</li>
            </ul>
          </div>

          <div className="task-details-bottom">
            <strong>Hourly Rate:</strong> ${this.props.location.state.hourly_rate}/hr
            <br />
            A 15% Trust and Support fee is added to the Tasker’s total rate.
            < br/>
            You will not be charged until your task is complete. Tasks have a one-hour minimum. You can cancel or reschedule anytime. If you cancel your task within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate.
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
