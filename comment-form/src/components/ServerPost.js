"use  client";

import HandlePosts from "@/utils/handlePosts";

export default function ServerPosts() {

    // const updatePostWithId = HandleSubmit.bind(null, postId)
    const pfp = "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
    const date = new Date();
    const timestamp = date.toString().replace('(Greenwich Mean Time)', '')
    console.log(timestamp)
    
    return(
        <div>
            <form className="bg-neutral-200 p-10 rounded-3xl text-black flex flex-col justify-center" action={HandlePosts}>
                <label>Username: </label>
                <input className="bg-neutral-300 p-4 mb-2 rounded" name="username" placeholder="username" type="text" /> <br/>
                <label>Post: </label>
                <input className="bg-neutral-300 p-4 mb-2 rounded"  name="content" placeholder="post" type="text" /> <br/>
                {/* <label>Profile: </label>  */}
                
                <input name="profile" defaultValue={pfp} type="hidden" /> 
                <input name="time_date" defaultValue={timestamp} type="hidden" /> 
                <button className="bg-blue-600 p-4 rounded-3xl w-24 flex justify-center" type="submit">Submit</button>

            </form>
        </div>
    )
}