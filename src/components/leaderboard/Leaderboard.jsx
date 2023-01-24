import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { database } from "../../services/firebase"
import { getDatabase, ref, get, child,query,orderByChild } from "firebase/database"
const Leaderboard = () => {

    const [userId, setUserId] = useState("")

    const navigate = useNavigate()

    const authenticate = async () => {
        let storage = localStorage.getItem("accesstoken")
        if (storage === "" || storage === null){
          navigate("/")
        } else {
          let decode = jwtDecode(storage)
        //   const dbPoint = await get(child(ref(database),"Leaderboard"))
        let db = getDatabase()
        const mostViewedPosts = query(ref(db, "posts"), orderByChild("metrics/views"));
        const mostViewedPosts2 = query(ref(database, "posts"));
            // let items = dbPoint.val()
            console.log(typeof mostViewedPosts);
            console.log(mostViewedPosts);
            console.log(mostViewedPosts2);
            setUserId(decode.userId)
        }
    }

    useEffect(() => {
        authenticate()
        console.log("test");
    },[])

    return (
        <>
            <div className="container-fluid">
                <section className="container">
                    <div className="mt-5 mx-5" style={{ "height": "80vh" }}>
                        <div className="mt-1 fs-1 fw-bold">Leaderboard</div>
                        <div className="container mt-3">
                            <div className="py-2">
                                <div className="d-flex justify-content-evenly border border-dark border-2 rounded py-3">
                                    <div className="d-flex">
                                        <h5 className="me-5 mt-3">1</h5>
                                    </div>
                                    <div className="d-flex me-5">
                                        <img className="rounded-circle" width={45} src="https://res.cloudinary.com/dtochq6ko/image/upload/v1674465805/Profile/l1ixovppehxy6mt3ifnx.jpg" alt="" />
                                        <h6 className="me-5 m-2 mt-3">Name</h6>
                                    </div>
                                    <div className="d-flex">
                                        <h6 className="ms-5 mt-3">Point</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Leaderboard