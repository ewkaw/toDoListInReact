import { useState } from "react";
import { filterTasks } from "./apiCalls";

export const FilterTaskForm = ({filter}) => {
    const [error, setError] = useState(false);
    const search = (e) => {
        e.preventDefault();

        filterTasks(e.target.value).then(data =>{
            if(data.length === 0 ){
                setError(true);
            } else {
                filter(data);
                setError(false);
            }
        });
    };

    return(
        <>
            <input onChange={search} type="text" placeholder="Wpisz szukane zadanie" />      
            {error && (<div>Nie ma takiego zadania!</div>)}
        </>
    )
};