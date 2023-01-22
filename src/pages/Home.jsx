import React from "react"
import { Box, Footer, Headline, } from "../components"

export default function Home() {
    return(
        <>
            <div className="mb-3 mt-3">
                <Headline/>
            </div>
            <div className="">
                <Box name={"Recommended games"} cols={4} rows={1} gap={10} />
            </div>
            <Footer/>
        </>
    )
}