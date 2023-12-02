export const NewTaskForm = (props) => {
    const { onAdd, len} = props;
    const addNewTask = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('titleTask');
        const newTask = {
            'title': title, 
            "id": len + 1
        };
        onAdd(newTask);
    };
    return (
        <>
            <form onSubmit={addNewTask}>
                <input type="text" name="titleTask" placeholder="Wpisz zadanie" />
                <button>Dodaj</button>
            </form>
        </>
    )
};