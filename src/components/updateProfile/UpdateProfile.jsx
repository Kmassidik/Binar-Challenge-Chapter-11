import React from "react"
import "./UpdateProfile.css"

const UpdateProfile = (props) => {
  return (
<div className="update-profile">
            <button type="button" className="btn btn-primary main-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                {props.text}
            </button>

            <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-white">
                            <div className="d-flex flex-row justify-content-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="">
                            </div>
                        <form className="d-flex flex-column justify-content-center align-items-center">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profie" />
                                <input type="text" placeholder="How should we display your name?" />
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
