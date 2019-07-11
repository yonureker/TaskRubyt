import React from 'react';
import  TaskIndexItem  from './task_index_item';
import NavBarContainer from '../navbar/navbar_container';

class TaskIndex extends React.Component {
  componentDidMount() {
   this.props.fetchAllTasks();
   window.scrollTo(0,0);
   }

   render() {
     const tasks = this.props.tasks.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task}
          deleteTask={this.props.deleteTask} />
      );
    });
     return (
       <div className="fullTaskerPage">
         <NavBarContainer />
           <div className="security">
              <img className="secimage" src={window.security}   />
             <div className="trust"> Trust & Safety Guarantee : </div>

               <div className="vet">All Taskers are fully vetted & background checked.</div>

           </div>


           <div className="tconfirm">Your created tasks</div>
       <ul className="taskindex">
           {tasks}
       </ul>
</div>
     );
  }

}


export default TaskIndex;