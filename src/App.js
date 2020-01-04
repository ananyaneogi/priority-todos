import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './App.css';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import About from './components/About';

function App() {
	const storedTodos = localStorage.getItem('priorityTodos');
	const [todos, setTodos] = useState(
		storedTodos ? JSON.parse(storedTodos) : []
	);

	const addTodo = text => {
		const newTodos = [...todos, { text, isCompleted: false }];
		setTodos(newTodos);
		localStorage.setItem('priorityTodos', JSON.stringify(newTodos));
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		// newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
		localStorage.setItem('priorityTodos', JSON.stringify(newTodos));
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
		localStorage.setItem('priorityTodos', JSON.stringify(newTodos));
	};

	const reorder = (todos, startIndex, endIndex) => {
		const newTodosArray = [...todos];
		const [removed] = newTodosArray.splice(startIndex, 1);
		newTodosArray.splice(endIndex, 0, removed);
		return newTodosArray;
	};

	const onDragEnd = result => {
		const { destination, source } = result;
		if (!destination) {
			return;
		}

		if (destination.index === source.index) {
			return;
		}

		const newTodosOrder = reorder(
			todos,
			result.source.index,
			result.destination.index
		);
		setTodos(newTodosOrder);
		localStorage.setItem('priorityTodos', JSON.stringify(newTodosOrder));
	};

	return (
		<main>
			<h1>
				Priority Todos
				<small>Get Real Things Done</small>
			</h1>
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='app'>
					<div style={{ minHeight: '60px' }}>
						<TodoForm addTodo={addTodo} todos={todos} />
					</div>
					<Droppable droppableId='todolist'>
						{(provided, snapshot) => (
							<ul
								className='todo-list'
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{todos.map((todo, index) => (
									<Draggable
										draggableId={`drag-${index}`}
										index={index}
										key={index}
										// isDragDisabled={todo.isCompleted}
									>
										{provided => (
											<Todo
												index={index}
												todo={todo}
												completeTodo={completeTodo}
												removeTodo={removeTodo}
												key={index}
												provided={provided}
											/>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</ul>
						)}
					</Droppable>
				</div>
			</DragDropContext>
            <About/>
		</main>
	);
}
export default App;
