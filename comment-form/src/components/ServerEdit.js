"use server";
import { db } from "@/utils/utilities";

export default async function EditPost({postId, editPost}) {

    return (
        <div>
            <form >
                <label>Edit Post: </label>
                <input name="editPost" placeholder="edit post" type="text" />
            </form>
        </div>
    )
    
}