import {useContext} from "react";
import {UserContext} from "../../context/UserContext";

const Security = () => {
    const user = useContext(UserContext) || false;

    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            Security {user && (<span>is Logged</span>)}
        </div>
    );
}

export {Security};
