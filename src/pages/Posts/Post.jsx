import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <>
      <div className="image-post">
        <Link to={`/post/${_id}`}>
          <img src={cover} alt="hello image" className="image-for-post" />
        </Link>
      </div>
      <div className="post-info">
        <Link to={`/post/${_id}`}>
          <h1>{title}</h1>
        </Link>

        <div className="post-info-author">
          <p className="author">{author.username}</p>
          <p className="date">
            {format(new Date(createdAt), "d MMM, yyyy HH:mm")}
          </p>
        </div>
        <p className="post-info-paragraph">{summary}</p>
      </div>
    </>
  );
}
