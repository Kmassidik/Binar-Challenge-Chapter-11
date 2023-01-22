import React, { useState, useEffect } from "react"
import "./ProfileComponent.css"
import UpdateProfile from "../updateProfile/UpdateProfile"
import { FaCamera } from "react-icons/fa"
import { onAuthStateChanged } from "firebase/auth";
import authFirebase from "../../services/firebase";

const ProfileComponent = () => {

const [userId, setUserId] = useState("")
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")


useEffect (() => {
    onAuthStateChanged(authFirebase, (user) => {
        if (user) {
            if (user.displayName == null) {
                const u1 = user.email.substring(0, user.email.indexOf("@"))
                const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
                setUserName(uName)
              } else {
                setUserName(user.displayName)
              }

              console.log(user)
            
              setUserId(user.uid)
              setEmail(user.email)
        }
    })
}, [userName])

  return (
    <div className="profile">
        <div className="profile__content">
            <div className="profile__picture">
                    <img className="profile-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
                    <div className="edit-icon">
                    <UpdateProfile text={<FaCamera />} />
                    </div>
            </div>
            <div className="profile__desc">
                <div className="profile__email">
                    <h2>{email}</h2>
                </div>
                <div className="profile__display-name">
                    <p>{userName}</p>
                    <br />
                    user id: {userId}
                    <UpdateProfile text="Edit" />
                </div>
                <div className="profile__achievements">
                    <div className="profile__achievements-head">
                    <h4>Achievements</h4>
                    <p></p>
                    </div>
                    <div className="profile__achievements-emblem">
                        <img src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/02/26143931/lambang-garuda-pancasila-810x608.jpg" alt="dummy" />
                        <img src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/02/26143931/lambang-garuda-pancasila-810x608.jpg" alt="dummy" />
                        <img src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/02/26143931/lambang-garuda-pancasila-810x608.jpg" alt="dummy" />
                        <img src="https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2021/02/26143931/lambang-garuda-pancasila-810x608.jpg" alt="dummy" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent
