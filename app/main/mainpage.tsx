import { getNewBlogs } from "../api/blogServer/getNewBlogs";
import { getPopularBlogs } from "../api/blogServer/getPopularBlogs";
import { NewBlogContainer } from "../api/blogServer/NewBlogContainer";
export const MainPage = () => {
  return (
    <div className="flex flex-1 h-[90vh] p-10 w-full">
      <div className="flex flex-col w-full border-2 border-black">
        <div className="">
          <div>Featured/Trending</div>
          <div className="grid grid-rows-2 grid-cols-3 gap-3 border-2 border-black">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
        </div>
        <div>
          <div className="grid grid-rows-1 grid-cols-5 border-2 border-black">
            <div className="col-start-1">1</div>
            <div className="col-start-5">
              <div className="grid grid-rows-2">
                <div>top</div>
                <div>bottom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
