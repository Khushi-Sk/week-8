"use server";
import { db } from "@/utils/utilities";

export default async function EditPost({postId, editPost}) {

    const date_time = new Date();
    const timestamp = date_time.toString().replace('(Greenwich Mean Time)', '')
    // await db.query(`UPDATE posts SET content=${editPost} date_n_time=${timestamp}, WHERE id=${postId}`)
    
}