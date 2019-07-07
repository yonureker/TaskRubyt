import React from 'react';

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
    return this.props.createTask(this.state)
  }

  render() {
    return(
    <div className="task-form-page">Hello</div>
    )
    // const MyTaskDetailsForm = (props) => {
    //   return (
    //     <TaskDetailsForm
    //       state={this.state}
    //       location={this.state.location}
    //       handleChange={this.handleChange}
    //       createTask={this.props.createTask}
    //       updateTask={this.props.updateTask}
    //       errors={this.props.errors}
    //       handleErrorInput={this.handleErrorInput}
    //       removeErrors={this.props.removeErrors}
    //       setState={this.setState.bind(this)}
    //       reloadTask={this.reloadTask.bind(this)}
    //       dispatchCurrentTask={this.props.dispatchCurrentTask}
    //       {...props}
    //     />
    //   );
    // }
  }
}

export default TaskForm;