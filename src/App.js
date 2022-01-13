import axios from "axios";
import React from "react";
import Feed from './Feed';

const baseURL = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJYYkliY19rN3dGeXZArdC1qVmNuSWItZAXdydG43Y0NEVzgwZAE1GbUEzYWZAFV0VWbHZATaEYwakZAFdTZAmOTJRSmhRaUsyS0xoZAW42LXpmU29tLVZAZAU2k0Q3c4R194WHB2UnVBM2dR";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data);
      console.log('axios ran');
      console.log(post);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container" style={{width: 300}}>
    {post.map((post) => (
      <div className="post" key={post.id + 'p'} style={{border: 'solid', marginBottom: 3, padding: 3}}>
        <h2>{ post.caption }</h2>
        <Feed key={post.id + 'f'} feed={post} />
        <div className="byLine">
          <p className="username">{ post.username }</p>
          <p className="timestamp">{ post.timestamp }</p>
        </div>
      </div>
    ))}
  </div>
  );
}