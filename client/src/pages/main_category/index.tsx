import axios from "axios";
import { useEffect,useState} from "react";
import { useParams} from "react-router-dom";

import { Filter } from "../../components/organisms/filter/filter";
import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import AnimalFilters  from "../../data/filters/animals.json";

const MainCategoryPage = () => {
  const {main_category} = useParams();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get(`http://localhost:8000/products/${main_category}`)
    .then((response: any) => {
      setData(response.data)
    })
    .catch((error: any) => {
      console.error(error);
      setIsLoading(false)
    })
    .finally(() => setIsLoading(false))
  }, [main_category]);

  return (
    <PageLayout>
      <Filter items={AnimalFilters} />
      <ProductLayout>
        {data.map((item, index) => (
            <ProductCard
              id={`${item.main_category}/${item.sub_category}/${item._id}`}
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

export default MainCategoryPage;
