import styles from "./ViewBlog.module.css";
// title , body , photo
const BlogDetails = () => {
  //   const { id } = useParams();
  //   const {
  //     data: blog,
  //     error,
  //     isPending,
  // } = useFetch("http://localhost:8000/blogs/" + id);
  // const history = useHistory();

  // const handleClick = () => {
  //   fetch("http://localhost:8000/blogs/" + blog.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };

  return (
    <div>
      {/* {isPending && <div>Loading...</div>} */}
      {/* {error && <div>{error}</div>} */}
      {/* {blog && (  */}
      {true && (
        <div>
          {/* <h2>{blog.title}</h2> */}
          <article className={styles.Anime}>
            <div className={styles.card}>
              <h1> Damn</h1>
              {/* <p>Written by {blog.author}</p> */}
              <figure className={styles.size4}>
                <img className={styles.size4} src="sample.jpg" alt="" />
              </figure>
              <figure-caption className={styles.size3}>
                <em>
                  <p className={styles.caption}>Anime Arts</p>
                </em>
              </figure-caption>

              <div>
                <p>
                  <em>Anime</em> is quite popular nowadays and it's popularity
                  is not just limited to kids and teenagers. It's popularity is
                  exploding in West( Western Nations) in recent years. Just to
                  get a rough idea about it , let me tell you that the highest
                  grossing movie in year 2020 worldwide was an <em>anime</em>{" "}
                  movie titled <em>"The Demon Slayer"</em> . Ofcourse that's not
                  something that usually happen and pandemic may also play a
                  part in it but this shows the popularity of <em>anime</em> is
                  huge and it's only going to increase more in the near future.
                  One of the main reasons for it's popularity it's beautiful art
                  which is traditionally hand drawn and unique which captures
                  attention of many and another is the different content
                  flavours that <em>anime</em> in general have which is unique
                  on it's own. Anime title like <em>Shingeki No Kyojin</em>{" "}
                  which is known by name <em>Attack On Titan</em> has attracted
                  attention of even many stars in hollywood.{" "}
                </p>
              </div>
              {/* <button onClick={handleClick}>delete</button> */}
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
