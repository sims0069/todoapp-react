import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        if (value) {
            editTodo(value, task.id);
        setValue("")
            }
            return
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
