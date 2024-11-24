"use server";
import { db } from "@/utils/utilities"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export default async function HandleComment(formData){
        
        const username = formData.get("username")
        const content = formData.get("content")
        const profile = formData.get("profile")

        const post_id = formData.get("postId"); 
        const timestamp = formData.get("time_date")
        
        if (!username || !content || !profile || !post_id || !timestamp) {
                throw new Error("Required fields are missing");
            }
        // console.log(timestamp)
        // console.log(username, content, profile)
        await db.query(`INSERT INTO comments(username, content, profile_pic, post_id, date_n_time) VALUES($1, $2, $3, $4, $5)`, [username, content, profile, post_id, timestamp])
        revalidatePath("/posts")
        redirect('/posts')


}

