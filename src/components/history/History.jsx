import React from "react"
import authFirebase, { database } from "../../services/firebase";
import { ref, child, get } from "firebase/database"
import { useEffect,useState } from "react"
import DataTable from "react-data-table-component";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function History() {
    const [data, setData] = useState({})
    const [isId, setDataId] = useState()

    const navigate = useNavigate()
    const authenticate = () => {onAuthStateChanged(authFirebase, (user) => {
        if (user) {
            setDataId(user.uid)
        } else {
            navigate("/")
        }
    })}

    const columns = [
        {
            name: "Email",
            selector: row => row.email,
        },
        {
            name: "Total Game",
            selector: row => row.totalGame,
        },
        {
            name: "Total Point",
            selector: row => row.totalPoint,
        },
        {
            name: "Pick Bot",
            selector: row => row.gameRecord.pickBot,
        },
        {
            name: "Pick Player",
            selector: row => row.gameRecord.pickPlayer,
        },
        {
            name: "Winner",
            selector: row => row.gameRecord.pickWinner,
        },
    ];

    const dataTable = async () => {
        try {
            const db = await get(child(ref(database),`${isId}/gameHistory`)) 
            const item = db.val() 
            setData(item)
        } catch (error) {
            console.log(error);
        }
    }
       
    useEffect(()=>{
        authenticate()
        dataTable()
    },[dataTable])
    return(
    <>
        <div className='BackgroundBody'>
        <div className='container'>
            <div className="px-5 ">
            {
            data != null && 
            <DataTable
            columns={columns}
            data={data.record}
            pagination
            />
        }
            </div>
        </div>
        </div>
    
    </>
    )
}