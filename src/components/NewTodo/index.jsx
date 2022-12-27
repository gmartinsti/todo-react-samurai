import React, { useState } from 'react'
import PropTypes from 'prop-types'
import "./styles.css"

const NewTodo = ({ onNewTodo }) => {
    const escapeKey = 27;
    const enterKey = 13;
    const [value, setValue] = useState('')
    
  const erase = () => {
    setValue('');
  }

  const submit = () => {
    if(onNewTodo) {
    onNewTodo(value)
    erase();
    }
  }
  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.which === enterKey) {
      submit();
      // console.log(value);
    } else if (event.which === escapeKey) {
      erase();
    }
  }

    return (
        <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown} />

    )
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}

export default NewTodo;