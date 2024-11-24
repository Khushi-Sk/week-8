
"use client";
import { useState } from "react";
import EditPost from "./ServerEdit";

export default function HandleEdit({post_id, edit_post}) {

    const [edit, setEdit] = useState(false)

    const Edit = () => setEdit(!edit)

    return (
        <>
            <div className=" rounded-3xl ">
            {edit ? <EditPost postId={post_id} editPost={edit_post} /> : 
            <button className=" p-3 rounded-3xl text-lg " onClick={Edit}>
                <img width={18} src="https://cdn-icons-png.flaticon.com/512/82/82122.png" />
            </button>
            }
            
        </div>
        </>
    )
}