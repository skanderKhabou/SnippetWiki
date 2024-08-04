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

export async function createSnippet(formState: {message: string} , formData: FormData) {
    //server action
    
    //check user input and make sure it is valid
   try {
    
     const title = formData.get("title") as string;
     const code = formData.get("code") as string;
     
     if(typeof title !== "string" || title.length < 3 ){
       return {message: 'Title Must Be Longer'}
      }
      
      if(typeof code !== "string" || code.length < 10 ){
        return {message: 'Code Must Be Longer'}
      }
      
      //create new record in database
      
      await db.snippet.create({
        data: { title: title, code: code },
      });
    } 
    catch (error : unknown) {
      error instanceof Error ? {message: error.message} : {message: 'something went wrong'}
      
    }

    // redirect homepage
    redirect("/");
     
    }