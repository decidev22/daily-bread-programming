import { getNewBlogs } from "../api/blogServer/getNewBlogs";
import { getPopularBlogs } from "../api/blogServer/getPopularBlogs";
import { NewBlogContainer } from "../api/blogServer/NewBlogContainer";

import SmallArticle from "../components/articleComponent/SmallArticle";
import Article from "../components/articleComponent/Article";
import Image from "next/image";

export const MainPage = () => {
  return (
    <div className="flex h-[90vh] p-10 w-full flex-col">
      <div className="flex flex-wrap flex-col w-full">
        <div className="h-[30px]">Featured/Trending</div>
        <div className="h-[30px]">Category selection</div>
        <div className="grid grid-rows-2 grid-cols-3 gap-3">
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
          <Article size="Small" />
        </div>

        <div className="h-30">
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
              <div className="grid grid-rows-2 h-[100%]">
                <div className="flex w-full h-full items-center justify-center">
                  <Image
                    src="/icons/lightning.svg"
                    alt="Zapp!"
                    style={{
                      objectFit: "cover",
                      rotate: "0deg",
                    }}
                    width={100}
                    height={100}
                    className="whiteicon"
                  />
                </div>
                <div className="flex w-full h-full items-center justify-center">
                  <Image
                    src="/icons/Group_light.svg"
                    alt="Meet"
                    style={{
                      objectFit: "cover",
                    }}
                    width={100}
                    height={100}
                    className="whiteicon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
