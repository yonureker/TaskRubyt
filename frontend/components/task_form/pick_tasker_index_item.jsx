import React from 'react';
import { Link } from 'react-router-dom';


const TaskerIndexItem = ({ tasker }) => {
  return (

<div className="single-tasker-container">
  <div className="tasker-scorecard-left">
      <img className="taskerphoto" src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_300,w_300/v1551542728/otmnjrkkjmvapnhmjr9k.jpg"/>
      <div className="task">
        <Link to={{ pathname: '/confirm-task', state: {tasker_id: tasker.id, hourly_rate:tasker.hourly_rate, first_name:tasker.first_name, last_name:tasker.last_name}}}   className="tasklink"> <button className="tasker-select-button">Select and Continue</button> </Link>
      </div>


      <div className="tasker-chat-info-container">
        <div className="tasker-chat-info">
            You can chat with your Tasker,
          <br/>
            adjust task details,
            or change   <br/> task time after booking.</div>
      </div>
    </div>

  <div className="tasker-scorecard-right">
    <div className="tasker-data-container">
    <div className="tasker-name-rate">
      <div className="tasker-name">
        {/* <strong>{tasker.first_name} {tasker.last_name[0] + '.'}</strong> */}
      </div>
      <div className="tasker-rate">
      <strong> ${tasker.hourly_rate}/hr </strong>
      </div>
    </div>
    <div className="stars">
      
    </div>
    </div>
    <div className="tasker-description-container">
    <div className="tasker-description-title"><strong>How I can help: </strong>  </div>
    <div className="tasker-description-content">
      {tasker.tasker_description}
    </div>
    </div>
    
  </div>
</div>);


};

export default TaskerIndexItem;