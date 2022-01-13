import axios from "axios";
import React from "react";
import Feed from './Feed';

const baseURL = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJYYkliY19rN3dGeXZArdC1qVmNuSWItZAXdydG43Y0NEVzgwZAE1GbUEzYWZAFV0VWbHZATaEYwakZAFdTZAmOTJRSmhRaUsyS0xoZAW42LXpmU29tLVZAZAU2k0Q3c4R194WHB2UnVBM2dR";

//call post to get a component with instagram information

export default function ApiData() { 
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data.data);
      console.log('axios ran');
      console.log(data);
    });
  }, []);

  if (!data) return null;
}