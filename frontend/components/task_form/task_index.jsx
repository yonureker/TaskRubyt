import React from 'react';
import  TaskIndexItem  from './task_index_item';

class TaskIndex extends React.Component {
  componentDidMount() {
   this.props.fetchAllTasks();
   this.props.fetchAllUsers();
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
       <ul className="taskindex">
           {tasks}
       </ul>
</div>
     );
  }

}


export default TaskIndex;