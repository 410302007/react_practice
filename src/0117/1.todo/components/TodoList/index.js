import TodoItem from './TodoItem';
function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {/* 不可用索引值當key，索引值在執行過程中會因為新增、刪除而改變 */}
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
