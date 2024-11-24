import ClientComment from "@/components/ClientComment"
import { db } from "@/utils/utilities"


export default async function SinglePost({params}){

    const posts = (await db.query(`SELECT * FROM posts WHERE id=${params.id} `)).rows
    const comments = (await db.query(`SELECT * FROM comments WHERE post_id=${params.id} `)).rows

    return (
        <div>
            {posts.map((post) => {
                return(
                    <div className="bg-slate-50 w-96 text-black rounded border-b border-neurtral-300 " key={post.id} >
                        <div className="flex flex-row">
                            <img width={70} alt="profile picture" src={post.profile_pic}/>
                            <h3 className="pt-5" >{post.username}</h3>
                        </div>
                        {/* {console.log(post.id)} */}
                        
                        <div className="flex flex-col">
                            <h3 className="pl-16 w-96 " >{post.content}</h3>
                            <div  className="flex flex-row py-4 px-16 gap-10 " >
                                <button>
                                <ClientComment post_id={post.id} />
                                    {/* <img  width={18} src="https://cdn-icons-png.flaticon.com/128/3114/3114810.png" /> */}
                                </button>
                                
                                <button>
                                    <img width={18} src="https://cdn-icons-png.flaticon.com/512/82/82122.png" />
                                </button>
                            </div>
                        </div>
                        <div className="ml-5 border-black border-l ">
                            {comments.map((comment) => {
                                return (<>
                                    <div key={comment.id} className="border-b-2 border-neurtral-300" >
                                        <div className="flex flex-row">
                                            <img width={70} alt="profile picture" src={comment.profile_pic} />
                                                <h3  className="pt-5">{comment.username}</h3>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="pl-16 w-96 ">{comment.content}</h3>
                                            <div  className="flex flex-row py-4 px-16 gap-10 " >
                                                <button>
                                                    <img  width={18} src="https://cdn-icons-png.flaticon.com/128/3114/3114810.png" />
                                                </button>
                                                
                                                <button>
                                                    <img width={18} src="https://cdn-icons-png.flaticon.com/512/82/82122.png" />
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </>)
                            })}
                        </div>
                        {/* <p>{post.date_n_time}</p> */}
                        
                    </div>
                )
            })}
        </div>
        
    )
}