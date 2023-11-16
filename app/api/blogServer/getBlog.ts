export const getBlog = (blogid: string) => {
  const url = `http://localhost:8080/blogs/${blogid}`;

  const newBlogsJson = async () => {
    try {
      //axios instead of fetch
      const response = await fetch(url);
      const jsonOutput = await response.json();
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  return newBlogsJson();
};
