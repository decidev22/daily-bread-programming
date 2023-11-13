export const NewBlogContainer = (newBlogs: any) => {
  const onClickHander = () => {
    console.log(newBlogs()._id);
  };
  return (
    <div>
      {newBlogs().map((blog: any) => (
        <div
          className="grid grid-cols-3 gap-5 hover:bg-slate-200 p-1"
          onClick={onClickHander}
        >
          <p>{blog.blogTitle}</p>
          <p>{blog.blogauthor}</p>
          <p className="text-sm">{blog.blogPostDate}</p>
        </div>
      ))}
    </div>
  );
};
