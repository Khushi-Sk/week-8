"use client";

import { useState } from "react";
import Delete from "./Delete";


export default function HandleDelete({post_id}){

    const [del, setDel] = useState(false)

    const handleShow = () => setDel(!del)
    return (
        <div className=" rounded-3xl ">
            {del ? <Delete postId={post_id} /> : 
            <button className=" p-3 rounded-3xl text-lg " onClick={handleShow} >
                <img width={18} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
            </button>
            }
            
        </div>
    )
}