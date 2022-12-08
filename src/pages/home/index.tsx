import {useEffect, useState} from "react";
import {Profile, Card, Schedule, Security, Login} from "src/components";
import {UserProvider} from "src/context/UserContext";
import {ITodo} from "../../model/ITodo";
import '../../index.css';
const HomePage = () => {
    const [items, setItems] = useState<ITodo[]>([] as ITodo[]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((res: ITodo[]) => setItems(res))
    }, [])
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <UserProvider>
                <Login/>
                <Profile/>
                <Schedule/>
                <Security/>
            </UserProvider>
            <div className="grid md:grid-cols-3 lg:grid-cols-4">
                {items.map(({title, body, id}: ITodo) => (
                    <Card key={id} title={title} body={body} id={id}></Card>
                ))}
            </div>

        </div>
    );
}

export {HomePage};
