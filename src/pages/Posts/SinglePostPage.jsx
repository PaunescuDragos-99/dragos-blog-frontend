import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

export default function SinglePostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(process.env.REACT_APP_URL_ADRESS + `/post/${id}`).then((response) => {
      response.json().then((postData) => {
        setPostInfo(postData);
        setLoading(false);
      });
    });
  }, []);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!postInfo) {
    return <h1>There is no post here!</h1>;
  }
  return (
    <div className="single-post-container">
      <div className="container-title-date">
        <h1>{postInfo.title}</h1>
        <p>{format(new Date(postInfo.createdAt), "d MMM, yyyy HH:mm")}</p>
      </div>
      <h2>By {postInfo.author.username}</h2>
      <div className="single-image-container">
        <img src={postInfo.cover} alt="hello image" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
    </div>
  );
}
