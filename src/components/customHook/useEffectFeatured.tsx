import { useState, useEffect } from "react";
import axios from "axios";

const useFetchFeatured = (url: string, feature: string | any) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        const getData = Object.values(response.data);

        setProducts([getData]);
        let featuredProduct: any = [];
        if (feature === "recommended") {
          featuredProduct = getData.filter(
            (item: any) => item.recommended === true
          );
        } else if (feature === "promotion") {
          featuredProduct = getData.filter(
            (item: any) => item.promotion === true
          );
        } else if (feature === "announcement") {
          featuredProduct = getData.filter(
            (item: any) => item.announcement === true
          );
        } else {
          featuredProduct = getData.filter((item: any) => item.id == feature);
        }

        setProducts(featuredProduct);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return { products };
};

export default useFetchFeatured;
