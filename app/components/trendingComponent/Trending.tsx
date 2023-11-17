import Article from "../articleComponent/Article";

const Trending = async () => {
  const trending_res = await fetch(
    "http://localhost:8080/blogs/trending",
    {
      headers: {
        cache: "no-cache",
      },
    }
  );
  const trending_data = await trending_res.json();
  console.log(trending_data);
  console.log(trending_data.length);
  return (
    <>
      {trending_data.map(
        (
          article: { title: string; content: string },
          index: number
        ) => (
          <Article
            key={index}
            size="Small"
            title={article.title}
            content={article.content}
          />
        )
      )}
    </>
  );
};

export default Trending;
