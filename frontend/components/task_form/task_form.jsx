import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.currentUser ? this.props.currentUser.id : "",
      tasker_id: "",
      category_id: this.props.location.category_id,
      description: "",
      location: "",
      task_date: "",
      task_start_time: "",
      vehicle_required: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveTask(this.state);
    this.props.history.push("/pick-tasker");
  }

  handleChange(location) {
    this.setState({ location });
  }

  handleSelect(location) {
    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .catch(error => console.error("Error", error));
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

                <PlacesAutocomplete
                  value={this.state.location}
                  onChange={this.handleChange}
                  onSelect={this.handleChange}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading
                  }) => (
                    <div className="scorecard-form">
                      <input
                        {...getInputProps({
                          placeholder: "Search Places ...",
                          className: "location-search-input"
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {/* {loading && <div>Loading...</div>} */}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active
                            ? "suggestion-item--active"
                            : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? {
                                backgroundColor: "#fafafa",
                                cursor: "pointer"
                              }
                            : {
                                backgroundColor: "#ffffff",
                                cursor: "pointer"
                              };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
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
                        <input
                          type="radio"
                          name="vehicle"
                          value="false"
                          onChange={this.update("vehicle_required")}
                        />{" "}
                        Not needed for task
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="vehicle"
                          value="true"
                          onChange={this.update("vehicle_required")}
                        />{" "}
                        Task requires a car
                      </li>

                      <li>
                        <input
                          type="radio"
                          name="vehicle"
                          value="true"
                          onChange={this.update("vehicle_required")}
                        />{" "}
                        Task requires a truck
                      </li>
                    </ul>

                    <br />
                  </form>
                </div>
              </div>
            </div>

            <div className="task-scorecard-datetime scorecard">
              <div className="scorecard-content">
                <div className="scorecard-title">
                  <span>TASK DATE & TIME</span>
                </div>
                <div className="scorecard-form-time-date">
                  <div>
                  <input
                    type="date"
                    name="date"
                    onChange={this.update("task_date")}
                  />

                  <input
                    type="time"
                    name="time"
                    onChange={this.update("task_start_time")}
                  />
                  </div>

                  <br />
                </div>
              </div>
            </div>

            <div className="task-scorecard-description scorecard">
              <div className="scorecard-content">
                <div className="scorecard-title">
                  <span>TASK DESCRIPTION</span>
                  <br />
                  <span>
                    Start the conversation and tell your Tasker what you need
                    done. This helps us show you only qualified and available
                    Taskers for the job. Don't worry, you can edit this later.
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
                      onChange={this.update("description")}
                    />
                    <br />
                    <div className="continue">
                      <button onClick={this.handleSubmit}>
                        See Taskers & Prices
                      </button>
                    </div>
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
