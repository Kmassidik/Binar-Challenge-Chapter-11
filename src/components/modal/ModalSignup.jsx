import React, { useState } from "react"
import authFirebase from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ModalSignup() {
    const [state, setState] = useState({
        email: "",
        password: ""
      });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
        ...prevProps,
        [name]: value
        }));
    };

    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        createUserWithEmailAndPassword(authFirebase, state.email, state.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("=> ini user",user);
            navigate(0)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
    };
    return(
        <>
            <div className="modal fade fw-bold" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="d-flex justify-content-end">
                            <button type="button" className="btn text-white d-flex" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <h1 className="text-white mb-4 mt-3 text-title">Sign Up</h1>
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
                                    <button type="submit" className="modal-button btn btn-outline-warning py-2 fw-bold">Register</button>
                                </div>
                            </form>
                            <div className="form-check py-3">
                                <div className="input-ceklis">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                </div>
                                <label className="form-check-label text-white fw-bold" htmlFor="defaultCheck1">
                                    I accept the Terms & Conditions and Privacy
                                </label>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <h6 className="text-white">Already registered?</h6>
                                <a className="text-link ms-2 fw-bold" href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}