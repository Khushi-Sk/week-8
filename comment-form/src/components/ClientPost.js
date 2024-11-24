"use client";

import { useState } from "react";
import ServerPosts from "./ServerPost";

export default function ClientPost(){

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(!show)
    return (
        <div className=" rounded-3xl  mb-20 ">
            {show ? show && <ServerPosts /> : 
            <button className="bg-blue-600 p-3 rounded-3xl text-lg " onClick={handleShow} >
                Add Post  
            </button>
            }
            
        </div>
    )
}