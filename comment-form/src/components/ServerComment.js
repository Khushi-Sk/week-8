"use  client";

import HandleComment from "@/app/posts/[id]/add/page";

export default function ServerComments( { postId } ) {

    // const updatePostWithId = HandleSubmit.bind(null, postId)
    const pfp = "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
    const date = new Date();
    const timestamp = date.toString().replace('(Greenwich Mean Time)', '')
    console.log(timestamp)
    
    return(
        <div>
            <form action={HandleComment}>
                <label>Username: </label>
                <input className="bg-neutral-300 p-4 mb-2 rounded" name="username" placeholder="username" type="text" />
                <label>Comment: </label>
                <input className="bg-neutral-300 p-4 mb-2 rounded"  name="content" placeholder="comment" type="text" /> <br/>
                {/* <label>Profile: </label>  */}
                
                <input name="profile" defaultValue={pfp} type="hidden" /> 
                <input name="postId" defaultValue={postId} type="hidden" /> 
                <input name="time_date" defaultValue={timestamp} type="hidden" /> 
                <button className="bg-blue-300 p-2 rounded" type="submit">Add Comment</button>

            </form>
        </div>
    )
}