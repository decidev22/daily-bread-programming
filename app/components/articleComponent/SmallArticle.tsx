import Image from "next/image";

const SmallArticle = () => {
  return (
    <div className="flex w-[100%] h-[100%] border-2 border-black p-2">
      <div className="relative bg-prologue-grey w-[150px] h-[150px] rounded-lg">
        <Image
          src="/example_1.jpeg"
          alt="Blog Thumbnail"
          layout="fill"
        />
      </div>
      <div className="flex flex-col p-3">
        <div>Title of a blog article</div>
        <div>Summary of the blog</div>
      </div>
    </div>
  );
};

export default SmallArticle;
