import {useRouteLoaderData} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {ITodo} from "../../model/ITodo";

const ToDoPage = () => {
    const TodoItem: ITodo = useRouteLoaderData("todo") as ITodo;
    const [item, setItem] = useState(TodoItem);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const polling = setInterval(() => {}, 2000);
        return () => {
            console.log("Cleaning")
            clearInterval(polling);
        }
    },[])

    const fetchRequest = useCallback(() => {
        // setItem({...TodoItem, title: `${Math.random()}`});
    }, []);

    return (
        <div className="container my-12 mx-auto px-4 md:px-12 ">
            {item.title} {counter}
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title" type="text" value={item.title} placeholder="title"
                            onChange={(e) => {
                                setItem({...item,title: e.target.value })
                                setCounter(counter + 1);
                            }}></input>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                            Body
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="body"
                            onChange={(e) => {
                                setItem({...item,body: e.target.value })}
                            }
                            value={item.body}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={fetchRequest}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Save
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export {ToDoPage};
