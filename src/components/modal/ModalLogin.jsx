import React from "react"
import Binar from "../modal/binar.png"
// import Game from "../modal/game.avif"
import BinarAcademy from "../modal/binarAcademy.png"
import "./modal.css"

export default function ModalLogin() {
    
    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Login
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-white">
                            <div className="">
                                <img src={BinarAcademy} />
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="">
                                <img className="modal-logo" src={Binar}/>
                            </div>
                            <h1>Join the fun!</h1>
                            Create a free account to save your progress, add games to favorites and build your profile!
                        </div>
                        <div className=" d-flex row justify-content-center py-2">
                            <div>
                                <button type="button" className="modal-button btn btn-warning">Create an account</button>
                            </div>
                            <div>
                                <button type="button" className="modal-edit btn btn-outline-warning mt-3">Sign in</button>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}