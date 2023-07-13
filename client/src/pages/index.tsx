import axios from 'axios';
import { useMemo, useEffect,useState} from "react";
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
  const [goats, setGoats] = useState<any[]>([]);
  const [sheep, setSheep] = useState<any[]>([]);
  const [bestDeals, setBestDeals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get('http://localhost:8000/products')
    .then((response: any) => {
      setData(response.data)
    })
    .catch((error: any) => {
      console.error(error);
      setIsLoading(false)
    })
    .finally(() => setIsLoading(false))
  }, []);
  
  useMemo(() => {
      const availableSheep = data.filter((item) => item.sub_category === 'sheep')
      const availableGoats = data.filter((item) => item.sub_category === 'goats')
      const availableBestDeals = data.filter((item) => item.price <= 2000)
      setGoats(availableGoats)
      setSheep(availableSheep)
      setBestDeals(availableBestDeals)
  }, [data])
  

  return (
    <PageLayout>
      <Filter items={MainFilters} />
      <LeadCard image={BonsmaraCattle} text="Animals" />
      {
        bestDeals.length > 0 && (
          <ProductLayout title="Today's Best Deals">
            {bestDeals?.map((item, index) => {
              return (
                <ProductCard
                  id={`${item.main_category}/${item.sub_category}/${item._id}`}
                  key={index}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price}
                  altText={item.title}
                  isLoading={isLoading}
                />
              )
            })
            }        
          </ProductLayout>
        )
      }
      {
        sheep.length > 0 && (
          <ProductLayout title="Shop Sheep">
            {sheep?.map((item, index) => {
              return (
                <ProductCard
                  id={`${item.main_category}/${item.sub_category}/${item._id}`}
                  key={index}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price}
                  altText={item.title}
                  isLoading={isLoading}
                />
              )
            })
            }        
          </ProductLayout>
        )
      }
      {
        goats.length > 0 && (
          <ProductLayout title="Shop Goats">
            {goats?.map((item, index) => {
              return (
                <ProductCard
                  id={`${item.main_category}/${item.sub_category}/${item._id}`}
                  key={index}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price}
                  altText={item.title}
                  isLoading={isLoading}
                />
              )
            })
            }        
          </ProductLayout>
        )
      }
    </PageLayout>
  );
};




export default IndexPage;
