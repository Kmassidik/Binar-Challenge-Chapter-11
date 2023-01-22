import React from "react"
import ProfileComponent from "../components/profile/ProfileComponent"
import Button from "../components/button/ButtonDownload"

export default function Profile() {
    return(
        <div className="vh-100">
            <ProfileComponent />
            <Button/>
        </div>
    )
}