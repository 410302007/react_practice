// 在傳入參數時解構props
import TodoItem from './TodoItem';
import EditForm from './EditForm';
function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {/* 不可用索引值當key，索引值在執行過程中會因為新增、刪除而改變 */}
        {todos.map((todo, i) => {
          // key值要加在map裡面回調函式中返回的元件最外層
          return todo.editing ? (
            <EditForm key={todo.id} />
          ) : (
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
