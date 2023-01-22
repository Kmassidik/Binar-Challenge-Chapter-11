import React from "react"
import ProfileComponent from "../components/profile/ProfileComponent"

export default function Profile() {
    return(
        <>
            <div className="container-fluid mt-4">
                <ProfileComponent />
            </div>
            <div className="container">
                <div className="row mx-3 my-5">
                    <div className="col-6">
                        <div className="container border rounded-3" style={{"height":"500px",}}>
                            <div class="input-group mt-2 mb-3">
                                <input type="file" class="form-control" id="inputGroupFile02"/>
                                <label class="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container border rounded-3" style={{"height":"500px",}}>
                            <button type="button" class="btn border btn-sm mt-2 mb-3">Download your history</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}