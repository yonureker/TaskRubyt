import React from 'react';
import SearchBar from './search_bar'

class TaskForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: null,
      user_id: this.props.currentUser ? this.props.currentUser.id : null,
      tasker_id: null,
      category_id: null,
      description: "",
      location: "",
      task_date: "",
      task_start_time: "",
      completed: "false",
      vehicle_required: null,
      form_complete: false
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.state).then(() => this.props.history.push('/mytasks'));
  }

  render() {

    return(
    <div className="task-form-page">
      <div className="task-progress">
        <div className="task-progress-container">
          Task Progress will be displayed here
        </div>
        <div className="task-progress-sub-bar">
          Filter and sort to find your Tasker. Then view their availability to request your date and time.
        </div>
      </div>
      {/* <div>
        <Route path="/task/details" render={TaskDetailsForm}/>
        <Route path="/task/taskers" render={BrowseTaskersForm}/>
        <Route path="/task/datetime" render={ChooseDateTimeForm}/>
        <Route path="/task/confirm" render={ConfirmDetailsForm}/>
      </div> */}
      <div className="task-location form-card">
        <div className="task-location-container">
          <div className="task-location-title">
            YOUR TASK LOCATION
          </div>
          <div className="task-location-search-bar-container">
              <SearchBar location={this.state.location} onChange={this.update("location")}/>
          </div>
          <div className="task-location-cta">
            <button >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="task-location form-card">
        <div className="task-location-container">
          <div className="task-location-title">
            TASK OPTIONS
          </div>
          <div className="task-location-search-bar-container">
            <form>
            <input type="radio" name="" id=""/>Not required for this task
            <br></br>
            <input type="radio" name="" id=""/>Vehicle required
            </form>
          </div>
          <div className="task-location-cta">
            <button >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="task-location form-card">
        <div className="task-location-container">
          <div className="task-location-title">
            TELL US THE DETAILS OF YOUR TASK
          </div>
          <div className="task-location-search-bar-container">
            <input type="text"/>
            <textarea></textarea>
          </div>
          <div className="task-location-cta">
            <button >
              Save
            </button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    )
  }
}

export default TaskForm;