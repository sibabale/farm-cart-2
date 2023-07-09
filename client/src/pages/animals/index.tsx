import axios from "axios";
import { useEffect,useState} from "react";
import "../../styles.global.css";

import { Filter } from "../../components/organisms/filter/filter";
import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import AnimalFilters  from "../../data/filters/animals.json";

const IndexPage = () => {

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:3333/products')
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
      <Filter items={AnimalFilters} />
      <ProductLayout>
        {data.map((item, index) => (
            <ProductCard
              id={item.id}
              key={index}
              image={item.images[0]}
              title="Lorem"
              price={item.price}
              isLoading={isLoading}
            />
          ))
        } 
      </ProductLayout>
    </PageLayout>
  );
};

export default IndexPage;