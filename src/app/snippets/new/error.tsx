"use client";
interface ErrorPageProps {
  error: Error;
  reset: () => {};
}
export default function SnippetErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
