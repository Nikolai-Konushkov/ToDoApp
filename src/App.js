import React, { Component } from 'react';
import InputTaskForm from './components/InputTaskForm';
import DisplayTasks from './components/DisplayTasks';
import './App.css';

class App extends Component {
  state = {
    dealInput: '',
    tasksarray: [],                               
  }

  formValidation = event => {
    event.preventDefault();
    const dealInput = event.target.dealInput.value;
    const dealInputIsBlank = dealInput.trim().length < 1;
    dealInputIsBlank 
      ? alert(`Введите название`)
      : this.storeTask(dealInput);
  };

  storeTask = dealInput => {
      this.setState({
        dealInput: dealInput,
        tasksarray: [...this.state.tasksarray, { title: dealInput, crossedOut: false } ]
      });
      document.forms["deal"].reset();
  };


  removeTask = (event, index) => {
    event.stopPropagation();
    const removedTaskArray = [...this.state.tasksarray];
    removedTaskArray.splice(index, 1);  
    this.setState({ tasksarray: removedTaskArray });   
  };


  crossOutTask = index => {
    const { tasksarray } = this.state
    const selected = tasksarray[index];

    this.setState({                                           
      tasksarray: [
        ...tasksarray.slice(0, index),
        Object.assign(selected, {crossedOut: !selected.crossedOut}),
        ...tasksarray.slice(index + 1)
      ]
    });
  };


  componentDidUpdate() {
    console.log(this.state.tasksarray);
  };

  render() { 
    const { tasksarray } = this.state
    const { formValidation, storeTask, removeTask, crossOutTask } = this

    return (
      <div>
        <InputTaskForm 
          task={storeTask}
          formValidation={formValidation} 
        />
            
        <DisplayTasks 
          tasksArray={tasksarray} 
          removeTask={removeTask} 
          crossOutTask={crossOutTask} 
        />
      </div>
    );
  };
};

export default App;