import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      alert(`Something went wrong: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};
