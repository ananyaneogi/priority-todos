import React from 'react'

import checkboxIcon from '../assets/checkbox.svg';
import checkIcon from '../assets/check.svg';
import close from '../assets/close.svg';

function Todo({ todo, index, completeTodo, removeTodo, provided }) {
	return (
		<li
			ref={provided.innerRef}
			{...provided.dragHandleProps}
			{...provided.draggableProps}
		>
			<div
				className='todo'
				style={{
					textDecoration: todo.isCompleted ? 'line-through' : '',
					color: todo.isCompleted ? '#6c5a62' : '#0f0308'
				}}
			>
				{todo.isCompleted ? (
					<img src={checkIcon} alt='completed task' />
				) : (
					<button
						onClick={() => completeTodo(index)}
						className='button-reset'
						aria-label='check off task'
					>
						<img src={checkboxIcon} aria-hidden='true' alt='' />
					</button>
				)}
				<span>
					{index + 1} - {todo.text}
				</span>
				<button
					onClick={() => removeTodo(index)}
					className='button-reset'
					aria-label='delete task'
				>
					<img src={close} aria-hidden='true' alt='' />
				</button>
			</div>
		</li>
	);
}

export default Todo;