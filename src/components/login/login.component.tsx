import {useContext} from "react";
import {UserContext, UserSetContext} from "../../context/UserContext";
import {Toggle} from "../toggle/toggle.component";

const Login = () => {
    const user = useContext(UserContext);
    const setUser = useContext(UserSetContext);
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <Toggle checked={user} updateChecked={setUser}/>
        </div>
    );
}

export {Login};
