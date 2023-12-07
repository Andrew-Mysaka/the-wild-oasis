import ButtonIcon from "../../ui/ButtonIcon.jsx";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import {useLogout} from "./UseLogout.js";

function Logout() {
    const {logout, isLoading} = useLogout();

    return (
        <ButtonIcon disabled={isLoading} onClick={logout}>
            <HiArrowRightOnRectangle/>
        </ButtonIcon>
    );
}

export default Logout;