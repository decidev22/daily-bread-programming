import Image from "next/image";

interface ArticleProps {
  size: "Small" | "Medium" | "Large";
  className?: String;
  title?: String;
  content?: String;
}

const Article: React.FC<ArticleProps> = ({
  size,
  className,
  title,
  content,
}) => {
  let width;
  let height;

  // Size
  if (size === "Small") {
    width = 150;
    height = 150;
  }
  if (size === "Large") {
    width = 650;
    height = 400;
  }

  // Initialise title if none provided
  if (!title) {
    title = "Blog Title";
  }

  // Initialise conent if none provided
  if (!content) {
    content = "Content of a blog article.";
  }

  return (
    <div
      className={`flex w-full h-full border border-white p-2 ${className}`}
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
      <div className="flex flex-grow flex-col p-3 h-[100%] max-w-[300px]">
        <div>{title}</div>
        <div className="flex-1">{content}</div>
      </div>
    </div>
  );
};

export default Article;
