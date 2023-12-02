import { useEffect, useState } from "react";

export const useTaskApi = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:3004/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, []);
    return {tasks, setTasks};
};