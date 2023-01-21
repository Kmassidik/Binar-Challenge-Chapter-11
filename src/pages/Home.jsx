import React from "react"
import { Carousel, Navbar } from "../components"

export default function Home() {
    return(
        <>
            <Navbar/>
        <div className="mt-3 mb-3">
            <Carousel cols={4} rows={1} gap={10} />
        </div>
            <Carousel cols={4} rows={1} gap={10} />
        </>
    )
}