"use client";

import { useState } from "react";
import ServerComments from "./ServerComment";

export default function ClientComment({post_id}){

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(!show)
    return (
        <div className="bg-neutral-50 pt-2">
            <button onClick={handleShow} >
                <img  width={18} src="https://cdn-icons-png.flaticon.com/128/3114/3114810.png" />  
            </button>
            {show && <ServerComments postId={post_id} />}
        </div>
    )
}