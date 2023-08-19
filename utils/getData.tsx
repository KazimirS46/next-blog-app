export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) throw new Error("Unable fetch posts");
  return res.json();
}
