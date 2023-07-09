import axios from 'axios';
import { useEffect,useState} from "react";
import "../styles.global.css";

import { Filter } from "../components/organisms/filter/filter";
import ProductCard from "../components/organisms/product_card/product_card"
import { LeadCard } from "../components/organisms/lead_card/lead_card";
import { PageLayout } from "../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../components/organisms/layouts/product_layout/product_layout";

import MainFilters  from "../data/filters/main.json";

import BonsmaraCattle from "../assets/images/cows/bonsmara-lead.png";



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
      <Filter items={MainFilters} />
      <LeadCard image={BonsmaraCattle} text="Animals" />
      <ProductLayout title="Today's Best Deals">
          {data?.map((item, index) => (
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
