import React, { useEffect } from "react"
import { Box, Headline, Testimoni, } from "../components"
import { recommend, upcoming } from "../components/carousel/carouselImage/carouselImage"

export default function Home({userCredential}) {

    useEffect(()=>{
        console.log("halow");
        if (userCredential) {
            const jwtToken = userCredential.user.accessToken
            localStorage.setItem("accesstoken",jwtToken )
            console.log("ini datanya ==>",userCredential);
        }
    },[])
    return(
        <>
            <div className="mb-3 mt-3">
                <Headline/>
            </div>
            <div className="">
                <Box name={"Recommended games"} items={recommend} cols={4} rows={1} gap={10} />
            </div>
            <div className="">
                <Box name={"Upcoming games"} items={upcoming} cols={4} rows={1} gap={10} />
            </div>
            <div className="container">
                <Testimoni/>
            </div>
        </>
    )
}