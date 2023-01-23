import React, { useState, useEffect } from "react"
import "./UpdateProfile.css"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { ref, set, child, get } from "firebase/database"
import authFirebase, { database } from "../../services/firebase";
import ModalFailed from "../../components/modal/ModalFailed"

const UpdateProfile = (props) => {
    const [imgData, setImgData] = useState("")
    const [userName, setUserName] = useState("")
    const [isImg, setImg] = useState("")
    const [userId, setUserId] = useState("")

    const navigate = useNavigate()

    const authenticate = () => {onAuthStateChanged(authFirebase, (user) => {
        if (user) {
              setUserId(user.uid)
        } else {
            navigate("/")
        }
    })
}

    const fetchFirebase = async () => {
        try {
            const db = await get(child(ref(database),`${userId}/UserProfile/Profile`)) 
            const item = db.val() 
            setImgData(item.imgUrl)
        } catch (error) {
            <ModalFailed/>
        }
    }

    useEffect (() => {
        authenticate()
        fetchFirebase()
    }, [])

    const handleSubmit = (e) => {
        authenticate()
        e.preventDefault()
        const userProfile = { userName, imgUrl : isImg }
        if (isImg != "") {
            set(ref(database,`${userId}/UserProfile/Profile`), userProfile)   
        }else{
            <ModalFailed/>
        }
        navigate(0)
    }

    const handleImageChange = async (e) => {
        const image = e.target.files[0]
            const data = new FormData()
            await data.append("file", image)
            await data.append("upload_preset", "profileIMG")
            await data.append("cloud_name", "dtochq6ko")

            await fetch("https://api.cloudinary.com/v1_1/dtochq6ko/image/upload", {
                method: "post",
                body: data
            })
                .then((res) => res.json())
                .then((data) => { 
                    setImg(data.url) 
                }).catch((err) => {
                    alert(err);
                })    
    }

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
                        <form onSubmit={handleSubmit} className="p-4 d-flex flex-column justify-content-center align-items-center">
                                <div className="w-100 mb-3 form-title d-flex flex-row justify-content-center align-items-center ">
                                    <h5>Your name and profile picture in Binar Games</h5>
                                </div>
                                <div className="form-top mb-4 d-flex flex-row justify-content-center align-items-center">
                                    <img src={imgData} alt="profie" />
                                    <div className="d-flex flex-column justify-content-center align-items-start m-3 ms-4">
                                        <p className="para mb-3">Add a photo for your responses, comments, and reviews</p>
                                            <input className="input-image mb-3"
                                                type="file"
                                                onChange={(e) => {
                                                    handleImageChange(e)
                                                }} />
                                            {/* <button onClick={deleteImage}>Remove</button> */}
                                    </div>
                                </div>
                                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="mb-3" type="text" placeholder="How should we display your name?" />
                                <p className="para mb-4">Your display name is given in your reviews, comments, ratings, and responses. If you change it, the new name will also apply to your previously posted content.</p>
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