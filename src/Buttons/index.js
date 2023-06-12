import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className={`button--hideDone
                ${tasks.every(({ finished }) => !finished) ? "disabled" : ""}`}>
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className={`button--finishAll
                ${tasks.every(({ finished }) => finished) ? "disabled" : ""}`}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;