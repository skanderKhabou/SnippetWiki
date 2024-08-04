// FETCHING DATA STEPS
// Create a server component
// mark the component as async
// make http request or directly access database with db.snipet.findone or any method
// render the data directly or pass to child

import { db } from "@/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`snippets/${snippet.id}`}
        className="flex justify-between items-center p-2 border rounded"
        key={snippet.id}
      >
        <h3>{snippet.title}</h3>
        <h3>View</h3>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="font-bold  text-xl">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 border-r rounded-xl ">
          NEW
        </Link>
      </div>
      <div className="flex gap-2 flex-col">{renderSnippets}</div>
    </div>
  );
}
