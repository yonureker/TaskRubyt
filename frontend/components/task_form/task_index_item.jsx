
import React from 'react';



class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  return (


    <div className="taskitem">


     <div className="field">
      Tasker
     <div className="userinput">{this.props.task.first} {this.props.task.tasker_lastname}</div>
       </div>
       <img className="itemphoto" src={this.props.task.tasker_photo}/>

     <div className="field">
       Tasker Contact
     <div className="userinput">{this.props.task.contact}</div>
       </div>

      <div className="field">
       Tasker Rate
      <div className="userinput">{this.props.task.hourly_rate}</div>
        </div>

     <div className="field">
       Location
       <div className="userinput">{this.props.task.task_location}</div>
       </div>


     <div className="field">
     Duration
     <div className="userinput">{this.props.task.task_duration}</div>
       </div>

       <div className="field">
       Description
       <div className="userinput">{this.props.task.task_details}</div>
         </div>

           <div className="taskbutton">

            {/* <button className="taskcreatebutton" onClick={() => this.props.deleteTask(this.props.task.id)}>Cancel</button> */}
         </div>
       </div>



 );


}
}



export default TaskIndexItem;