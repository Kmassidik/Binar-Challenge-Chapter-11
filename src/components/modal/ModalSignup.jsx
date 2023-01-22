import React from "react"

export default function ModalSignup() {
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
                            <form className="pe-5 ps-5">
                                <fieldset>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input type="password" className="form-control mt-2" placeholder="Password"/>
                                    </div>
                                </fieldset>
                            </form>
                            <div className="form-check py-3">
                                <div className="input-ceklis">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                </div>
                                <label className="form-check-label text-white fw-bold" htmlFor="defaultCheck1">
                                    I accept the Terms & Conditions and Privacy
                                </label>
                            </div>
                            <div className="mx-3">
                                <button type="button" className="modal-button btn btn-outline-warning py-2 fw-bold">Login</button>
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