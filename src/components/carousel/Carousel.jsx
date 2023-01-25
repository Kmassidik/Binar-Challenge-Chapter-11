import React from "react"
import Carousel from "better-react-carousel"


export default function gridCarousel(el) {
    return(
        <>
            <Carousel cols={el.cols} rows={el.rows} gap={el.gap} loop>
                {el.items.map( 
                    (item) => {
                        return (
                        <Carousel.Item>
                            <img width="100%" src={item.image} />
                        </Carousel.Item>
                        )
                    }
                )}
            </Carousel>
        </>
    )
}