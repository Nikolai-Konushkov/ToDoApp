import React from 'react';

const InputTaskForm = ({ formValidation }) => { 
    return ( 
      <div className="inputContainer">
        <form name="deal" onSubmit={formValidation}>
          <input name="dealInput" type="text" placeholder="Введите название" /> 
          <button className="applyButton" type="submit">Добавить</button>
        </form>  
      </div>
    );
}

export default InputTaskForm;