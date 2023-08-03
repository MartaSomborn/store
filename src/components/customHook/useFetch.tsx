import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);
        setProducts(getData);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return { products };
};

export default useFetch;
