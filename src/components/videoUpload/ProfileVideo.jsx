import React, { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { ref, child, get, set } from "firebase/database"
import authFirebase, { database } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

export default function ProfileVideo() { 
  const [isVideo, setVideo] = useState("")
  const [isId, setDataId] = useState("")

  const navigate = useNavigate()
    const authenticate = () => {onAuthStateChanged(authFirebase, (user) => {
        if (user) {
            setDataId(user.uid)
        } else {
            navigate("/")
        }
    })}
    const dataTable = async () => {
      try {
          const db = await get(child(ref(database),`${isId}/UserProfile/vidProfile`)) 
          const item = db.val() 
          setVideo(item.vidUrl)
          console.log(item.vidUrl);
      } catch (error) {
          console.log(error);
      }
  }

  useEffect(()=>{
      authenticate()
      dataTable()
  },[dataTable])
  
  return (
    <div>
      <div className='container d-flex justify-content-center mt-4'>
          <video
            muted
            autoPlay
            loop
          >
            <source src={isVideo} width={100} height={100} type="video/mp4"/>
          </video>
      </div>
    </div>
    )
  }
  

  