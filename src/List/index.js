import "./style.css";

const List = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
                className={`list__item ${task.finished && hideDoneTasks ? "list__item--hidden" : ""}`}
            >
                <button className={`list__button list__button--finish`}>
                    {task.finished ? "✓" : ""}
                </button>
                <span className={`list__itemText ${task.finished === true ? "list__itemText--finished" : ""}`}>
                    {task.content}
                </span>
                <button className={`list__button list__button--delete`}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;