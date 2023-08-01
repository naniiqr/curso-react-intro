import './TodoList.css';

function TodoList({childrens}) {
    return (
    <ul className="Todolist">
        {childrens}
    </ul>
    );
}

export { TodoList };