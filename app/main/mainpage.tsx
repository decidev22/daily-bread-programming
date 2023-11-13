import { getNewBlogs } from "../api/blogServer/getNewBlogs";
import { getPopularBlogs } from "../api/blogServer/getPopularBlogs";
import { NewBlogContainer } from "../api/blogServer/NewBlogContainer";
export const MainPage = () => {
  return (
    <div className="flex flex-1 h-[90vh] p-10 w-full">
      <div className="bg-slate-400 w-full">
        <p>- Top Viewed</p>
        <div>{getPopularBlogs()}</div>
        <p>-Articles </p>
        <p>- About this Blog </p>
        <p>- How I built this Blog</p>
      </div>
    </div>
  );
};
