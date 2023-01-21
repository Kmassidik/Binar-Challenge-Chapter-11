import React from "react"
import hero from "./hero.png"

export default function Content(){
    return(
        <>
            <div className="container-fluid" style={{"maxnHeight":"85vh"}}>
                <div className="row mx-5">
                    <div className="col-8 mt-5">
                        <h1 className="d-flex display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead justify-content-md-start">
                            Today, you are still confused about where to play free online games? Oh, not really! 
                            Just use our game feature from binargame. Just click on the link, then choose the game you want to play, and play it for free. 
                            Very easy right?.
                        </p>
                        <div className="d-flex justify-content-center btn-lg">
                            <button type="button" className="btn btn-outline-warning">Play Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                        <img src={hero} alt="let's play" width={300} />
                    </div>
                </div>
            </div>
        </>
    )
}