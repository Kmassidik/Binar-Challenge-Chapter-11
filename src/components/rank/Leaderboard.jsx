import React from "react"
const animals = [
    { id: 1, animal: "Dog" },
    { id: 2, animal: "Bird" },
    { id: 3, animal: "Cat" },
    { id: 4, animal: "Mouse" },
    { id: 5, animal: "Horse" }
  ];

export default function Rank(){
    return(
        <>
            <div className="container-fluid">
                <section className="container">
                    <div className="mt-5 mx-5" style={{"height":"80vh"}}>
                        <div className="mt-1 fs-1">Leaderboard</div>
                        <div className="container mt-2">
                            <div>
                                {animals.map(item => (
                                    <>
                                    <div className="border my-2">
                                        <p key={item.id}>{item.animal}</p>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}