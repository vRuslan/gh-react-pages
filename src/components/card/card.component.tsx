import {ITodo} from "../../model/ITodo";
import {FC} from "react";


const Card: FC<ITodo> = ({title, body, id}) => {

    return (
        <div className="w-full p-4 lg:w-80">
            <div className="p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600">{body}</p>
                <p className="text-gray-600">{Math.random()}</p>

            </div>
        </div>

    );
}

export {Card}



