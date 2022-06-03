import ViewBlog from "./ViewBlog";

const Home = () => {
  const blogs = [
    {
      id: "1",
      title: "Damn",
      author: "ABCD",
      imageFileSource: "sample.jpg",
      content: (
        <p>
          <em>Anime</em> is quite popular nowadays and it's popularity is not
          just limited to kids and teenagers. It's popularity is exploding in
          West( Western Nations) in recent years. Just to get a rough idea about
          it , let me tell you that the highest grossing movie in year 2020
          worldwide was an <em>anime</em> movie titled{" "}
          <em>"The Demon Slayer"</em> . Ofcourse that's not something that
          usually happen and pandemic may also play a part in it but this shows
          the popularity of <em>anime</em> is huge and it's only going to
          increase more in the near future. One of the main reasons for it's
          popularity it's beautiful art which is traditionally hand drawn and
          unique which captures attention of many and another is the different
          content flavours that <em>anime</em> in general have which is unique
          on it's own. Anime title like <em>Shingeki No Kyojin</em> which is
          known by name <em>Attack On Titan</em> has attracted attention of even
          many stars in hollywood.{" "}
        </p>
      ),
    },
    {
      id: "2",
      title: "Damn",
      author: "ABCD",
      imageFileSource: "sample.jpg",
      content: (
        <p>
          <em>Anime</em> is quite popular nowadays and it's popularity is not
          just limited to kids and teenagers. It's popularity is exploding in
          West( Western Nations) in recent years. Just to get a rough idea about
          it , let me tell you that the highest grossing movie in year 2020
          worldwide was an <em>anime</em> movie titled{" "}
          <em>"The Demon Slayer"</em> . Ofcourse that's not something that
          usually happen and pandemic may also play a part in it but this shows
          the popularity of <em>anime</em> is huge and it's only going to
          increase more in the near future. One of the main reasons for it's
          popularity it's beautiful art which is traditionally hand drawn and
          unique which captures attention of many and another is the different
          content flavours that <em>anime</em> in general have which is unique
          on it's own. Anime title like <em>Shingeki No Kyojin</em> which is
          known by name <em>Attack On Titan</em> has attracted attention of even
          many stars in hollywood.{" "}
        </p>
      ),
    },
  ];
  // var i = 0;
  return (
    // <ViewBlog
    //   title="Damn"
    //   key={blogs[0].title}
    //   author="author"
    //   imageFileSource="sample.jpg"
    //   content={blogs[0].content}
    // />
    <div>
      {blogs.map((blog) => {
        return (
          <ViewBlog
            title={blog.title}
            author={blog.author}
            key={blog.id}
            imageFileSource={blog.imageFileSource}
            content={blog.content}
          />
        );
      })}
    </div>
  );
};

export default Home;
