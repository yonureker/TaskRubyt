import React from 'react';
import { Link } from 'react-router-dom';



class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




handleSubmit(e) {

  const task = Object.assign({},this.props.currentTask,{tasker_id: this.props.location.state.tasker_id});
  const {tasker_id, location, description} = task;
  const newObj = {tasker_id, location, description };
  this.props.createTask(newObj).then(() => {
       this.props.history.push('/tasks');
   });

}


render() {
  return (

    


    <div className="taskitem task-details-container">
     <div className="field">
      Tasker
     <div className="userinput">{this.props.task.first_name} {this.props.task.last_name}</div>
       </div>
       <img className="itemphoto" src={this.props.task.tasker_photo}/>

     <div className="field">
       Tasker Contact
     <div className="userinput">{this.props.task.contact}</div>
       </div>

      {/* <div className="field">
       Tasker Rate
      <div className="userinput">{this.props.tasker.hourly_rate}</div>
        </div> */}

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
         </div>

           <div className="taskbutton">

            <button className="taskcreatebutton" onClick={() => this.props.deleteTask(this.props.task.id)}>Cancel</button>
         </div>
       </div>



 );


}
}



export default TaskIndexItem;