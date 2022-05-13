import React from 'react';

const DisplayTasks = ({ tasksArray, removeTask, crossOutTask }) => { 
  return (
    <>
    {tasksArray.length > 0 &&
      <h2>Список дел:</h2>
    }
      <ol>
        {tasksArray.map((task, index) => (                            
          <li onClick={ () => crossOutTask(index) } key={index} >
            <div className="dealItem">
              { task.crossedOut                                         
                ? <strike>{task.title}</strike> 
                : task.title }
              <button className="deleteBtn" onClick={event => removeTask(event, index)}>Удалить</button>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default DisplayTasks;
