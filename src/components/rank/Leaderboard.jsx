import React from "react"

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

export default function Rank(){
    return(
        <>
            <div className="container-fluid">
                <section className="container">
                    <div className="mt-5 mx-5" style={{"height":"80vh"}}>
                        <div className="mt-1 fs-1">Leaderboard</div>
                        <div className="container mt-2">
                            <div className="row border">
                                <div className="col-1">
                                    No
                                </div>
                                <div className="col-2">
                                    Account Photo
                                </div>
                                <div className="col-5">
                                    Fullname
                                </div>
                                <div className="col-4">
                                    Total Point
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}