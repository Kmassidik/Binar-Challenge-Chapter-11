import React from "react"
import ProfileComponent from "../components/profile/ProfileComponent"
import Button from "../components/button/ButtonDownload"
import { GamesDetails, VideoUpload } from "../components"

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
                            <div className="input-group mt-2 mb-3">
                                <VideoUpload/>
                            </div>
                             {/* minta dibuatin video game details */}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="container border rounded-3" style={{"height":"80px",}}>
                            <div className="mt-3">
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}