import styles from "./ViewBlog.module.css";
// title , body , photo
const ViewBlog = ({ title, author, content, imageFileSource }) => {
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
  // console.log("coming here");
  return (
    <div>
      {/* {isPending && <div>Loading...</div>} */}
      {/* {error && <div>{error}</div>} */}
      {/* {blog && (  */}
      {true && (
        <div>
          <article className={styles.Anime}>
            <div className={styles.card}>
              {/* title */}
              <h1> {title}</h1>
              <p>Written by {author}</p>
              <figure className={styles.size4}>
                <img className={styles.size4} src={imageFileSource} alt="" />
              </figure>
              <figure-caption className={styles.size3}>
                <em>
                  <p className={styles.caption}>Anime Arts</p>
                </em>
              </figure-caption>

              <div>{content}</div>
              {/* <button onClick={handleClick}>delete</button> */}
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default ViewBlog;
