'use server'

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath} from "next/cache";


export async function updateSnippet(id:number ,code : string) {
   await db.snippet.update({where:{id},data:{code}})
    revalidatePath(`/snippets/${id}`)
     redirect(`/snippets/${id}`);
  }

export async function deleteSnippet(id:number){
    await db.snippet.delete({where:{id}})
    revalidatePath('/')
    redirect('/');
}

export async function createSnippet(formState: {message: string} , formData: FormData) {
    //server action
    
    //check user input and make sure it is valid
   try {
    
     const title = formData.get("title");
     const code = formData.get("code");
     
     if(typeof title !== "string" || title.length < 3 ){
       return {message: 'Title Must Be Longer'}
      }
      
      if(typeof code !== "string" || code.length < 10 ){
        return {message: 'Code Must Be Longer'}
      }
      
      //create new record in database
      
      await db.snippet.create({
        data: { title, code },
      });
    } 
    catch (error : unknown) {
      error instanceof Error ? {message: error.message} : {message: 'something went wrong...'}
      
    }

// revalidate homepapage control caching
revalidatePath('/');

    // redirect homepage
    redirect("/");
     
    }

    export async function filterSnippets (formData: FormData) {
        const snippets = await db.snippet.findMany();
        const search = formData.get("searchTitle") as string;
    const filteredArray = snippets.filter((snippet) => {
      return snippet.title.toLowerCase().includes(search.toLowerCase());
    });
      console.log(filteredArray)
    }