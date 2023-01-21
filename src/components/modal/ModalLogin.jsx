import React from "react"
import Binar from "../modal/binar.png"
import "./modal.css"

export default function ModalLogin() {
    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Login
            </button>

            <div className="modal fade fw-bold" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn text-white d-flex" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body text-white">
                            <div className="container-fluid">
                                <div className="container">
                                    <img className="modal-logo" src={Binar}/>
                                </div>
                                <h1 className="text-title">Join the fun!</h1>
                                <h6 className="mt-2">Create a free account to save your progress, add games to favorites and build your profile!</h6>
                            </div>
                        </div>
                        <div className=" d-flex row justify-content-center">
                            <div>
                                <button type="button" className="modal-edit btn btn-outline-warning fw-bold">Create an account</button>
                            </div>
                            <div>
                                <button type="button" className="modal-edit btn btn-outline-warning mt-3 mb-4 fw-bold">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}