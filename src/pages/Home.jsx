import React from "react"
<<<<<<< HEAD
import { Box, Footer, Headline, Navbar, VideoUpload, VideoPlayer } from "../components"
=======
import { Box, Footer, Headline, } from "../components"
>>>>>>> 994df6abaa6dcdb3f9656123af61d0859e335ae8

export default function Home() {
    return(
        <>
            <div className="mb-3 mt-3">
                <Headline/>
            </div>
            <div className="">
                <Box name={"Recommended games"} cols={4} rows={1} gap={10} />
            </div>
            <VideoUpload />
            <VideoPlayer />
            <Footer/>
        </>
    )
}