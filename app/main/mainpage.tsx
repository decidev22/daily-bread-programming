import { getNewBlogs } from "../api/blogServer/getNewBlogs";
import { getPopularBlogs } from "../api/blogServer/getPopularBlogs";
import { NewBlogContainer } from "../api/blogServer/NewBlogContainer";

import SmallArticle from "../components/articleComponent/SmallArticle";
import Article from "../components/articleComponent/Article";

export const MainPage = () => {
  return (
    <div className="flex h-[90vh] p-10 w-full flex-col">
      <div className="flex flex-wrap flex-col w-full border border-white">
        <div className="h-[30px]">Featured/Trending</div>
        <div className="h-[30px]">Category selection</div>
        <div className="grid grid-rows-2 grid-cols-3 gap-3 border border-white">
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
        </div>

        <div className="h-30 border border-white">
          <p>World Today/Categories</p>
          <div className="grid grid-cols-5 flex-grow flex-wrap">
            <div className="flex flex-col col-start-1 col-end-5">
              <Article
                size="Large"
                className={"font-bold"}
                content={
                  "Blog content and details and it is summarised so user can see what the content is actually about and not waste time reading what they don’t want. Blog content and details and it is summarised so user can see what the content is actually about and not waste time reading what they don’t want. Blog content and details and it is summarised so user can see what the content is actually about and not waste time reading what they don’t want."
                }
              />
            </div>
            <div className="col-start-5">
              <div className="grid grid-rows-2 h-[100%] border border-white">
                <div className="flex-1 border border-white w-full h-full">
                  <p>Thunder</p>
                </div>
                <div className="flex-1 border border-white w-full h-full">
                  Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
