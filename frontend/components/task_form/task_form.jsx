import React from "react";
import SearchBar from "./search_bar";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      user_id: this.props.currentUser ? this.props.currentUser.id : "",
      tasker_id: "",
      category_id: this.props.location.category_id,
      description: "",
      location: "",
      task_date: "",
      task_start_time: "",
      completed: "false",
      vehicle_required: "",
      form_complete: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .saveTask(this.state)
      // .then(() => this.props.history.push("/pick-tasker"));
  }

  render() {

    return (
      <div className="task-form">
        <div className="task-details">
          <div className="task-scorecard-container">
            <div className="task-scorecard-location scorecard">
              <div className="scorecard-content">
              <div className="scorecard-title">
                <span>YOUR TASK LOCATION</span>
              </div>
              <div className="scorecard-form">
                <form>
                  <input
                    type="text"
                    value={this.state.location}
                    onChange={this.update("location")}
                    className="signup-form"
                    placeholder="Location"
                  />
                  <br />
                  <button>Save</button>
                </form>
                </div>
              </div>
            </div>
            <div className="task-scorecard-vehicle scorecard">
              <div className="scorecard-content">
                <div className="scorecard-title">
                  <span>TASK OPTIONS</span>
                </div>
                <div className="scorecard-form">
                <form action="">
                  <ul>
                    <li>
                      <input type="radio" name="vehicle" value="false" onChange={this.update('vehicle_required')}/> Not needed for task
                    </li>

                    <li>
                      <input type="radio" name="vehicle" value="true" onChange={this.update('vehicle_required')}/> Task requires a car
                    </li>

                    <li>
                      <input type="radio" name="vehicle" value="true" onChange={this.update('vehicle_required')}/> Task requires a truck
                    </li>
                  </ul>

                  <br />
                  <button>Save</button>
                </form>
              </div>
              </div>
            </div>
            <div className="task-scorecard-description scorecard">
              <div className="scorecard-content">
                <div className="scorecard-title">
                  <span>TASK DESCRIPTION</span>
                  <br />
                  <span>
                    Start the conversation and tell your Tasker what you need done.
                    This helps us show you only qualified and available Taskers for
                    the job. Don't worry, you can edit this later.
                  </span>
                </div>
                <div className="scorecard-form">
                <form action="">
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="8"
                    placeholder="Hi, looking for help updating my apartment"
                    onChange={this.update('description')}
                  />
                  <br />
                  <button onClick={this.handleSubmit}>See Taskers & Prices</button>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
