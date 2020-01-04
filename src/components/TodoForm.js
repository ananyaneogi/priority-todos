import React, {useState} from 'react'

function TodoForm({ addTodo, todos }) {
	const [value, setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) {
            return;
        } 
		addTodo(value);
		setValue('');
	};

	const checkNumberOfTodos = () => {
		return todos.filter(todo => !todo.isCompleted).length < 4;
	};

	return checkNumberOfTodos() ? (
		<form onSubmit={handleSubmit}>
			<label for='todoInput' style={{ color: '#595959' }}>
				Add priority todos:
				<input
					type='text'
					className='input'
					value={value}
					onChange={e => setValue(e.target.value)}
					id='todoInput'
				/>
			</label>
		</form>
	) : (
		<span>Finish your priority todos to add more!</span>
	);
}

export default TodoForm;