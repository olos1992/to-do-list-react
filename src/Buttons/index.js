import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className={`buttons__button
                    ${tasks.every(({ finished }) => !finished) ? "disabled" : ""}`}>
                        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className={`buttons__button
                    ${tasks.every(({ finished }) => finished) ? "disabled" : ""}`}>
                        Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;