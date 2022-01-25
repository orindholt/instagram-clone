import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://emojihub.herokuapp.com/api";

const useEmojiFetch = () => {
  const [ data, setData ] = useState(null);
  useEffect(()=>{
    if(!localStorage["emojis"]){
      axios(`${api}/all`).then((res) => {
        const comparison = (a, b) => {
          if(a.htmlCode[0] > b.htmlCode[0]) return -1;
          if(a.htmlCode[0] < b.htmlCode[0]) return 1;
          return 0;
        }
        let sortedData = res.data.sort(comparison);
        let filteredData = sortedData.filter(obj => obj.htmlCode.length<2 && obj.htmlCode[0].length>7);
        setData(filteredData);
        localStorage["emojis"] = JSON.stringify(filteredData);
        
      });
    } else {
      setData(JSON.parse(localStorage["emojis"]));
    }
  }, []);
  
  return data;
}

export default useEmojiFetch;