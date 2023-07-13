import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

const IndexPage = () => {
  let { id } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:8000/products/animals/${id?.toLocaleLowerCase()}`)
    .then((response: any) => {
      setData(response.data)
    })
    .catch((error: any) => {
      console.error(error);
      setIsLoading(false)
    })
    .finally(() => setIsLoading(false))
  }, []);

  return (
    <PageLayout>
      <ProductLayout title={`${id?.charAt(0).toUpperCase()}${id?.slice(1)}`  }>
        {data.map((item, index) => (
            <ProductCard
              id={item._id}
              key={index}
              image={item.images[0]}
              title={item.title}
              price={item.price}
              altText={item.title}
              isLoading={isLoading}
            />
          ))
        } 
      </ProductLayout>
    </PageLayout>
  );
};

export default IndexPage;
