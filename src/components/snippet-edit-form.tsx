"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { startTransition, useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditFormm({ snippet }: SnippetEditFormProps) {
  const { title, code } = snippet;

  const [newCode, setNewCode] = useState("");

  const handleEditorChange = (value: string = "") => {
    setNewCode(value);
  };

  // METHODE 1 To update the DATA this method is very usefull cause it works even if javascript is disabled
  const editSnippetAction = actions.updateSnippet.bind(
    null,
    snippet.id,
    newCode
  );

  // METHODE 2 To update the DATA this methode is better because it looks like default behavior of react component
  //startTransition will assure that we don t navigate before the data is updated!
  // const handleClick = () =>
  //   startTransition(async () => {
  //     await actions.updateSnippet(snippet.id, newCode);
  //   });

  return (
    <>
      <label htmlFor={title}>{title}</label>
      <div>
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={code}
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />

        <form className="flex flex-col" action={editSnippetAction}>
          <button className="p-2 border rounded" type="submit">
            {" "}
            Save
          </button>
        </form>
      </div>
    </>
  );
}
