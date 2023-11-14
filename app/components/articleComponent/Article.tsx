import Image from "next/image";

interface ArticleProps {
  size: "Small" | "Medium" | "Large";
  className?: String;
}

const Article: React.FC<ArticleProps> = ({ size, className }) => {
  let width;
  let height;

  if (size === "Small") {
    width = 150;
    height = 150;
  }
  if (size === "Large") {
    width = 650;
    height = 400;
  }

  return (
    <div
      className={`flex w-full h-full border-2 border-black p-2 ${className}`}
    >
      <div
        className={`flex flex-grow bg-prologue-grey rounded-lg overflow-hidden`}
        style={{
          maxWidth: `${width}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/example_2.webp"
            alt="Blog Thumbnail"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={width}
            height={height}
          />
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div>Title of a {size} blog article</div>
        <div>Summary of the blog</div>
      </div>
    </div>
  );
};

export default Article;
