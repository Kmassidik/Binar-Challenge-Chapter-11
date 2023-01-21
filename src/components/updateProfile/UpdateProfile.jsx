import React from "react"
import "./UpdateProfile.css"

const UpdateProfile = () => {
  return (
<>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Edit
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-white">
                            <div className="">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="">
                            </div>
                            <h1>Sini gan</h1>
                            Hahahahahahah
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

export default UpdateProfile
