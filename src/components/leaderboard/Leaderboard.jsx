import React from "react"
import Neymar from "./Neymar.jpg"

export default function Rank(){
    return(
        <>
            <div className="container-fluid">
                <section className="container">
                    <div className="mt-5 mx-5" style={{"height":"80vh"}}>
                        <div className="mt-1 fs-1">Leaderboard</div>
                        <div className="container mt-3">
                            <div className="py-2">
                                <div className="d-flex justify-content-evenly border border-dark border-2 rounded py-3">
                                    <div className="d-flex">
                                        <h5 className="me-5 mt-3">1</h5>
                                    </div>
                                    <div className="d-flex me-5">
                                        <img className="rounded-circle" width={45} src={Neymar} alt="" />
                                        <h6 className="me-5 m-2 mt-3">Name</h6>
                                    </div>
                                    <div className="d-flex">
                                        <h6 className="ms-5 mt-3">Point</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-evenly border border-dark border-2 rounded py-3">
                                    <div className="d-flex">
                                        <h5 className="me-5 mt-3">1</h5>
                                    </div>
                                    <div className="d-flex me-5">
                                        <img className="rounded-circle" width={45} src={Neymar} alt="" />
                                        <h6 className="me-5 m-2 mt-3">Name</h6>
                                    </div>
                                    <div className="d-flex">
                                        <h6 className="ms-5 mt-3">Point</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-evenly border border-dark border-2 rounded py-3">
                                    <div className="d-flex">
                                        <h5 className="me-5 mt-3">1</h5>
                                    </div>
                                    <div className="d-flex me-5">
                                        <img className="rounded-circle" width={45} src={Neymar} alt="" />
                                        <h6 className="me-5 m-2 mt-3">Name</h6>
                                    </div>
                                    <div className="d-flex">
                                        <h6 className="ms-5 mt-3">Point</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="d-flex justify-content-evenly border border-dark border-2 rounded py-3">
                                    <div className="d-flex">
                                        <h5 className="me-5 mt-3">1</h5>
                                    </div>
                                    <div className="d-flex me-5">
                                        <img className="rounded-circle" width={45} src={Neymar} alt="" />
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