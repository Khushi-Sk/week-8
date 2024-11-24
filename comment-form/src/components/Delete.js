"use server";
import { db } from "@/utils/utilities";


export default async function Delete({postId}) {

    await db.query(`DELETE FROM posts WHERE id=${postId}`)

}