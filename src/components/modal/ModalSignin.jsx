import React from "react"

export default function ModalSignin() {
    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                Sign In
            </button>

            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdrop1Label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="d-flex justify-content-end">
                            <button type="button" className="btn text-white d-flex" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <h1 className="text-white mb-4 mt-3">Sign In</h1>
                            <div className="d-flex row justify-content-center">
                                <button type="button" className="modal-button btn btn-warning">
                                    Continue with Google</button>
                                <button type="button" className="modal-button btn btn-warning mt-3">Continue with Facebook</button>
                            </div>
                            <div className="text-white py-4">
                                or sign in with email
                            </div>
                            <form>
                                <fieldset>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input type="password" className="form-control mt-2" placeholder="Password"/>
                                    </div>
                                </fieldset>
                            </form>
                            <div className="text-white py-3">
                                i forget my password
                            </div>
                            <div className="">
                                <button type="button" className="modal-button btn btn-warning py-2">Login</button>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <h6 className="text-white">No account yet?</h6>
                                <a href="">
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