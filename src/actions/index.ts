'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";


export async function updateSnippet(id:number ,code : string) {
   await db.snippet.update({where:{id},data:{code}})
     redirect(`/snippets/${id}`);
  }

export async function deleteSnippet(id:number){
    await db.snippet.delete({where:{id}})
    redirect('/');
}

export async function createSnippet(formData: FormData) {
    //server action

    //check user input and make sure it is valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    //create new record in database

    const snippet = await db.snippet.create({
      data: { title: title, code: code },
    });
    // redirect homepage
    redirect("/");
  }