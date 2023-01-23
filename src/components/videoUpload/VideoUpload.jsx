import React, {useEffect, useState} from "react"
import { onAuthStateChanged } from "firebase/auth";
import { ref, set, child, get } from "firebase/database"
import authFirebase, { database } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export default function VideoPlayer() {
    const [userId, setUserId] = useState("")
    const [isVideo, setVideo] = useState("")
    const navigate = useNavigate()

    const dataTable = async () => {
        try {
            const db = await get(child(ref(database),`${userId}/UserProfile/vidProfile`))
            const video = db.val()
            console.log(db.val(),"==> ini datanya");
            setVideo(video.vidUrl)
        } catch (error) {
            console.log(error);
        }
    }

    const authenticate = () => {
        onAuthStateChanged(authFirebase, (user) => {
        if (user) {
              setUserId(user.uid)
        } else {
            navigate("/")
        }
    })}
    
    const createDb = (el) => {
        const userProfile = { vidUrl : el }
        set(ref(database,`${userId}/UserProfile/vidProfile`), userProfile)
    }
 
    const submitVideo = (e) => {
        const video = e.target.files[0]
        const data = new FormData()
        data.append("file", video)
        data.append("upload_preset", "profileVID")
        data.append("cloud_name", "dtochq6ko")

        fetch("https://api.cloudinary.com/v1_1/dtochq6ko/video/upload", {
            method: "post",
            body: data
        })
            .then((res) => res.json())
            .then((data) => {
                createDb(data.url)
            }).catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => {
            navigate(0)
        }, 5000);
    }
    useEffect(()=>{
        authenticate()
        dataTable()
    },[dataTable])

    return (
        <>
            <div>
                <h2>Video Upload</h2>
                <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => {submitVideo(e)}} />
                <button type="submit">upload</button>
                </form>
            </div>
            {isVideo}
        </>
    )
}