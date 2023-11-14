import { getNewBlogs } from "../api/blogServer/getNewBlogs";
import { getPopularBlogs } from "../api/blogServer/getPopularBlogs";
import { NewBlogContainer } from "../api/blogServer/NewBlogContainer";

import SmallArticle from "../components/articleComponent/SmallArticle";
import Article from "../components/articleComponent/Article";

export const MainPage = () => {
  return (
    <div className="flex flex-1 h-[90vh] p-10 w-full">
      <div className="flex flex-wrap flex-col w-full border-2 border-white">
        <div className="">
          <div className="h-[30px]">Featured/Trending</div>
          <div className="h-[30px]">Category selection</div>
          <div className="grid grid-rows-2 grid-cols-3 gap-3 border-2 border-white">
            <Article size="Small" />
            <Article size="Small" />
            <Article size="Small" />
            <Article size="Small" />
            <Article size="Small" />
            <Article size="Small" />
          </div>
        </div>

        <div className="h-30 border-2 border-white">
          World Today/Categories
        </div>
        <div className="grid grid-cols-5 flex-grow flex-wrap">
          <div className="flex flex-col col-start-1 col-end-5">
            <Article size="Large" className={"font-bold"} />
          </div>
          <div className="col-start-5">
            <div className="grid grid-rows-2">
              <div>top</div>
              <div>bottom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
