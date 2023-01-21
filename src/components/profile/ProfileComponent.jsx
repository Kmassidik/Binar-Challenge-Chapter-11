import React from "react"
import "./ProfileComponent.css"
import UpdateProfile from "../updateProfile/UpdateProfile"

const ProfileComponent = () => {

  return (
    <div className="profile">
        <div className="profile__content">
            <div className="profile__picture">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
            </div>
            <div className="profile__desc">
                <div className="profile__email">
                    <h2>nathanza@email.com</h2>
                </div>
                <div className="profile__display-name">
                    <p>Nathanza Gaurangga</p>
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
