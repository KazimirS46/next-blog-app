"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Epta! {error.message}</h1>;
}
