
import ClientPost from "@/components/ClientPost"
import EditPost from "@/components/ServerEdit"
import HandleDelete from "@/components/HandleDelete"
import HandleEdit from "@/components/HandleEdit"

import { db } from "@/utils/utilities"
import Link from "next/link"


export default async function PostsPage({ searchParams }) {

    const posts = (await db.query(`SELECT * FROM posts`)).rows

    if (searchParams.sort === "desc") {
        posts.reverse()
    }

    return (
        <>
            <div className="my-10 flex justify-end pr-10 ">
                <Link  href={'posts?sort=acs'} >Sort - </Link>
                <Link href={'posts?sort=desc'} >
                 - Reverse</Link>            
            </div>

            <div className="flex justify-center items-center flex-col h-full">
                <h1 className="text-4xl text-black p-4 bg-neutral-200 w-96 sm:w-[600px] flex justify-center items-center " >
                Tweeter (Elon Parody <img width={50} src="https://em-content.zobj.net/source/apple/325/winking-face_1f609.png" />)</h1>
                {posts.map((post) => {
                    return(
                        <>
                        <div className="bg-neutral-200 w-96 sm:w-[600px] flex justify-center items-center flex-col">
                            <div className="bg-slate-50 w-96 h-40 text-black rounded border-neutral-300 border " key={post.id}>
                                
                                    <div className="flex flex-row">
                                        <img width={70} alt="profile picture" src={post.profile_pic}/>
                                        <h3 className="pt-5" >{post.username}</h3>
                                        {/* <p className="text-black">{Array(post.date_n_time)}</p>  */}
                                    </div>
                                
                                    <div className="flex flex-col">
                                        <h3 className="pl-16 w-96 " >{post.content}</h3>
                                        {/* <p>{post.date_n_time}</p> */}
                                        <div  className="flex flex-row py-4 px-16 gap-10 " >
                                            <Link href={`/posts/${post.id}`} >
                                                <img className="pt-3"  width={18} src="https://cdn-icons-png.flaticon.com/128/3114/3114810.png" />  
                                            </Link>
                                            <button className=" p-3 rounded-3xl text-lg ">
                                                <img width={18} src="https://cdn-icons-png.flaticon.com/512/82/82122.png" />
                                            </button>
                                            {/* <HandleEdit post_id={post.id} content={post.content} /> */}
                                            {/* <button> */}
                                                <HandleDelete post_id={post.id} />
                                                {/* <img width={18} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
                                            </button> */}
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>

            <div className="mt-20 flex justify-center  pr-10 ">
                {/* <button className="bg-blue-600 p-3 rounded-3xl text-lg  " > */}
                    <ClientPost />
                {/* </button> */}
            </div>
        </>
        
    )
}