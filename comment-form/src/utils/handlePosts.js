"use server";
import { db } from "@/utils/utilities"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

export default async function HandlePosts(formData){
        
        const username = formData.get("username")
        const content = formData.get("content")
        const profile = formData.get("profile") 
        const timestamp = formData.get("time_date")
        
        if (!username || !content || !profile || !timestamp) {
                throw new Error("Required fields are missing");
            }
        // console.log(timestamp)
        // console.log(username, content, profile)
        await db.query(`INSERT INTO posts(username, content, profile_pic, date_n_time) VALUES($1, $2, $3, $4)`, [username, content, profile, timestamp])
        revalidatePath("/posts")
        redirect('/posts')


}