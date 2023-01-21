import React from "react"
import "./UpdateProfile.css"

const UpdateProfile = (props) => {
  return (
<div className="update-profile">
            <button type="button" className="btn btn-primary main-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                {props.text}
            </button>

            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-white">
                            <div className="d-flex flex-row justify-content-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="">
                            </div>
                        <form className="p-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="w-100 mb-3 form-title d-flex flex-row justify-content-center align-items-center ">
                                    <h5>Your name and profile picture in Binar Games</h5>
                                </div>
                                <div className="form-top mb-4 d-flex flex-row justify-content-center align-items-center">
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profie" />
                                    <div className="d-flex flex-column justify-content-center align-items-start m-3 ms-4">
                                        <p className="para mb-3">Add a photo for your responses, comments, and reviews</p>
                                        <button className="btn btn-primary">Add Photo</button>
                                    </div>
                                </div>
                                <input className="mb-3" type="text" placeholder="Input your display name" />
                                <p className="para mb-3">Your display name is given in your reviews, comments, ratings, and responses. If you change it, the new name will also apply to your previously posted content.</p>
                                <button type="submit" className="modal-button btn btn-warning">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UpdateProfile
