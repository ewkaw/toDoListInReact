export const addNewTaskToApi = (task) => {
    return fetch('http://localhost:3004/tasks', {
        method: 'POST',
        body: JSON.stringify({
            "title": task.title,
            'id': task.id,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const deleteTaskFromApi = (id) => {
    return fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const editTaskApi = (id, newTitle) => {
    return fetch(`http://localhost:3004/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            title: newTitle
        })
    }).then(res => res.json());
};

export const filterTasks = (searchTitle) => {
    if (searchTitle !== '')
        return fetch(`http://localhost:3004/tasks?title=${searchTitle}`)
                .then(res => res.json());
    else return fetch(`http://localhost:3004/tasks`)
        .then(res => res.json());
};