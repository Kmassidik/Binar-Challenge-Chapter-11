import React, { useState, useEffect } from "react"
import "./ProfileComponent.css"
import UpdateProfile from "../updateProfile/UpdateProfile"
import { FaCamera } from "react-icons/fa"
import { onAuthStateChanged } from "firebase/auth";
import { ref, child, get } from "firebase/database"
import authFirebase, { database } from "../../services/firebase";
import { useNavigate } from "react-router-dom";


const ProfileComponent = () => {

const [userId, setUserId] = useState("")
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [imgUrl, setImgUrl] = useState("")

const navigate = useNavigate()

const authenticate = () => {onAuthStateChanged(authFirebase, (user) => {
    if (user) {
          console.log(user)
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
        console.log(item)
        setUserName(item.userName)
        setImgUrl(item.imgUrl)
    } catch (error) {
        console.log(error);
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
