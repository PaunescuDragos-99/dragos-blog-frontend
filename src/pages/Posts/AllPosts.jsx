import { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_URL_ADRESS + "/post").then((response) => {
      response.json().then((posts) => {
        setData(posts);
      });
    });
  }, []);

  return (
    <div className="posts-container">
      {data.map((item, key) => (
        <div className="post-container" key={key}>
          <Post {...item} />
        </div>
      ))}
    </div>
  );
}
