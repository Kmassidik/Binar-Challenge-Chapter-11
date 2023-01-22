import { useNavigate } from "react-router-dom";

const navigate = useNavigate()
const Auth = () => {
    let storage = localStorage.getItem("accesstoken")
    if (storage === "" || storage === null){
        navigate("/")
    } 
}

export default Auth