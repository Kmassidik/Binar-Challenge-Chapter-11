import React, { useState } from "react"
import authFirebase from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import ModalFailed from "./ModalFailed"
export default function ModalSignin() {
    const [state, setState] = useState({
        email: "",
        password: ""
      });
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
        ...prevProps,
        [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(authFirebase, state.email, state.password)
            .then((userCredential) => {
                const jwtToken = userCredential.user.accessToken
                localStorage.setItem("accesstoken",jwtToken )
                // navigate("/",{replace: true})
                navigate(0)
            })
            .catch((err) => {
                alert(err)
            });
    };
    return(
        <>
            <div className="modal fade fw-bold" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="d-flex justify-content-end">
                            <button type="button" className="btn text-white d-flex" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <h1 className="text-white mb-4 mt-3 text-title">Login</h1>
                            <div className="d-flex row justify-content-center mx-3">
                            </div>
                            <form className="pe-5 ps-5" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div>
                                        <input name="email" value={state.email} onChange={handleInputChange} type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input name="password" value={state.password} onChange={handleInputChange} type="password" className="form-control mt-2" placeholder="Password"/>
                                    </div>
                                </fieldset>
                                <div className="mx-3 mt-3">
                                    <button type="submit" className="modal-button btn btn-outline-warning py-2 fw-bold">Login</button>
                                </div>
                            </form>
                            <div className="text-white py-3">
                                <a className="forget-password" href="">
                                    i forget my password
                                </a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <h6 className="text-white">No account yet?</h6>
                                <a  
                                    className="text-link ms-2" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop2">
                                    Register Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}