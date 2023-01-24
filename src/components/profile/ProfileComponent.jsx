import React, { useState, useEffect } from "react"
import "./ProfileComponent.css"
import UpdateProfile from "../updateProfile/UpdateProfile"
import { FaCamera } from "react-icons/fa"
import { onAuthStateChanged } from "firebase/auth";
import { ref, child, get } from "firebase/database"
import authFirebase, { database } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import ModalFailed from "../modal/ModalFailed"


const ProfileComponent = () => {

const [userId, setUserId] = useState("")
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [imgUrl, setImgUrl] = useState("")

const navigate = useNavigate()

const authenticate = () => {onAuthStateChanged(authFirebase, (user) => {
    if (user) {
          setUserId(user.uid)
          setEmail(user.email)
    } else {
        navigate("/")
    }
})
}

const fetchFirebase = async () => {
    try {
        const db = await get(child(ref(database),`${userId}/UserProfile`)) 
        const item = db.val() 
        setUserName(item.userName)
        setImgUrl(item.imgUrl)
    } catch (error) {
        <ModalFailed/>
    }
}

useEffect (() => {
    fetchFirebase()
    authenticate()
}, [userId, userName, email, imgUrl])

  return (
    <div className="profile">
        <div className="profile__content">
            <div className="profile__picture">
                    <img className="profile-img" src={imgUrl} alt="profile" />
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
                    <UpdateProfile text="Edit" />
                </div>
                <div className="profile__achievements">
                    <div className="profile__achievements-head">
                    <h4>Achievements</h4>
                    <p></p>
                    </div>
                    <div className="profile__achievements-emblem">
                        <img src="https://res.cloudinary.com/dtochq6ko/image/upload/v1674526978/Achievment/Epic_xqjxr7.png" alt="dummy" />
                        <img src="https://res.cloudinary.com/dtochq6ko/image/upload/v1674526840/Achievment/LegendRanked_izgbjb.png" alt="dummy" />
                        <img src="https://res.cloudinary.com/dtochq6ko/image/upload/v1674526841/Achievment/Mitik_v7lsmn.png" alt="dummy" />
                        <img src="https://res.cloudinary.com/dtochq6ko/image/upload/v1674526838/Achievment/MitikalGlory_cdzuxt.png" alt="dummy" />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent
