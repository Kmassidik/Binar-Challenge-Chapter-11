import React from "react"
import { Carousel } from "../components"

export default function Home() {
    return(
        <>
        <div className="mt-3 mb-3">
            <Carousel cols={4} rows={1} gap={10} />
        </div>
            <Carousel cols={4} rows={1} gap={10} />
        </>
    )
}