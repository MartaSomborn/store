import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDependecies = (url: string, category: string) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);

        const filteredCategory = getData.filter(
          (item: any) => item.Category === category
        );
        setProducts(filteredCategory);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }, [category]);

  return { products };
};

export default useFetchDependecies;
