import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

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
      task_start_time: "I'm Flexible",
      completed: "false",
      vehicle_required: null,
      form_complete: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.createTask(this.props.state)
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
      <div className="task-location form-card">
        <div className="task-location-container">
          <div className="task-location-title">
            YOUR TASK LOCATION
          </div>
          <div className="task-location-search-bar-container">
            <input type="text"/>
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
            <input type="text"/>
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
    </div>
    )
  }
}

export default TaskForm;