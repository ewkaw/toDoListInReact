import { useReducer } from 'react';

const reducer = (currentView, action) => {
    switch (action.type) {
        case 'edit-input':
            return { type: 'edit-input' };
        case 'cta': 
            return { type: 'cta'};
    }

    return currentView
}

export const TaskListItem = ({ task, onDelete, onEdit } ) => {
    const [view, dispatch] = useReducer(reducer, {
        type: 'cta'
    });

    const editTask = (e) => {
        e.preventDefault();

        const editForm = new FormData(e.target);
        const newTitle = editForm.get('title');
        dispatch({ type: 'cta' });
        onEdit(task.id, newTitle);
    }
    

    if (view.type === "cta") return (
        <li>{task.title}
            <button onClick={() => { onDelete(task.id) }}>Usuń</button>
            <button onClick={() => dispatch({ type: 'edit-input' })}>Edytuj</button>
        </li>);
    return (
        <>
            { view.type === 'edit-input' && (
                <form onSubmit={editTask}>  
                    <input type="text" name='title' defaultValue={task.title} />
                    <button onClick={ () => dispatch({ type: 'cta'})}> Anuluj</button>
                    <button type='sumbit'> Zapisz</button>
                </form>
            )}
        </>

    );
};