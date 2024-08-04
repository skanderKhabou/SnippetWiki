"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });

  return (
    <form className="" action={action}>
      <h3 className="font-bold m-3"> Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-13" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-13" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        {formState.message ? (
          <div className="text-red-700 my-2 p-2 bg-red-200 border rounded border-red-400 font-semibold text-sm">
            {formState.message}
          </div>
        ) : null}

        <button type="submit" className=" rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
