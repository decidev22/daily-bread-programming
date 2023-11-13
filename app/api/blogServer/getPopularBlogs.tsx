export const getPopularBlogs = async () => {
  const url = "http://localhost:8080/blogs/popular";

  const popularBlogsJson = async () => {
    try {
      //axios instead of fetch
      const response = await fetch(url);
      const jsonOutput = await response.json();
      //   console.log(jsonOutput);
      const newBlogPresent = jsonOutput.map((blog: any) => {
        const blogauthor = blog.username;
        const blogTitle = blog.title;
        const blogPostDate = new Date(blog.date).toLocaleString(
          "en-NZ",
          {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          }
        );
        const blogid = blog._id;
        const viewCount = blog.viewCount;
        return {
          blogTitle,
          blogauthor,
          blogPostDate,
          blogid,
          viewCount,
        };
      });
      console.log(newBlogPresent.slice(-5));
      return newBlogPresent.slice(-5);
    } catch (error) {
      console.log(error);
      throw new Error(`${error}`);
    }
  };
  return (
    <div>
      {(await popularBlogsJson()).map((blog: any) => (
        <div className="grid grid-cols-4 gap-4 hover:bg-slate-200 p-1">
          <p>{blog.blogTitle}</p>
          <p>{blog.blogauthor}</p>
          <p>{blog.viewCount}</p>
          <p className="text-sm">{blog.blogPostDate}</p>
        </div>
      ))}
    </div>
  );
};
