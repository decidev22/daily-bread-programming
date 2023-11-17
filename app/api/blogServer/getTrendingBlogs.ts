// export const getTrendingBlog = async () => {
//   const url = `http://localhost:8080/blogs/trending`;

//   const response = await fetch(url);
//   const jsonOutput = await response.json();

//   return jsonOutput;
// };

export async function GET(request: Request) {
  const url = `http://localhost:8080/blogs/trending`;

  const response = await fetch(url);
  const jsonOutput = await response.json();

  return jsonOutput;
}

export const revalidate = 10;
