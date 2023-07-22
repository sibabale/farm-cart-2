import "../styles.global.css";

import { Filter } from "../components/organisms/filter/filter";
import ProductCard from "../components/organisms/product_card/product_card"
import { LeadCard } from "../components/organisms/lead_card/lead_card";
import { PageLayout } from "../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../components/organisms/layouts/product_layout/product_layout";

import AnimalFilters  from "../data/filters/animals.json";
import animals from '../data/animals.json';
import BonsmaraCattle from "../assets/images/goats/goat-6.jpeg";
import SEO from "../components/molecules/SEO/SEO";

const IndexPage = () => {

  const data = animals;

  const availableCows = data.filter((item) => item.sub_category === 'cows')
  const availableSheep = data.filter((item) => item.sub_category === 'sheep')
  const availableGoats = data.filter((item) => item.sub_category === 'goats')  

  return (
    <>
     <SEO 
        path=""
        title={`Farm Cart | Buy Livestock Online` } 
        image=""
        description="South Africa's first online marketplace for high quality livestock, trusted by the biggest livestock farmers and buyers alike. Buy anything from stud to commercial animals."
      />
      <PageLayout>
        <Filter items={AnimalFilters} />
        <LeadCard image={BonsmaraCattle} text="Goats" />
        {
          availableCows.length > 0 && (
            <ProductLayout title="Shop Cows">
              {availableCows?.map((item, index) => {
                return (
                  <ProductCard
                    id={`${item.main_category}/${item.sub_category}/${item._id}`}
                    key={index}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    altText={item.title}
                    isLoading={false}
                  />
                )
              })
              }        
            </ProductLayout>
          )
        }
        {
          availableSheep.length > 0 && (
            <ProductLayout title="Shop Sheep">
              {availableSheep?.map((item, index) => {
                return (
                  <ProductCard
                    id={`${item.main_category}/${item.sub_category}/${item._id}`}
                    key={index}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    altText={item.title}
                    isLoading={false}
                  />
                )
              })
              }        
            </ProductLayout>
          )
        }
        {
          availableGoats.length > 0 && (
            <ProductLayout title="Shop Goats">
              {availableGoats?.map((item, index) => {
                return (
                  <ProductCard
                    id={`${item.main_category}/${item.sub_category}/${item._id}`}
                    key={index}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    altText={item.title}
                    isLoading={false}
                  />
                )
              })
              }        
            </ProductLayout>
          )
        }
      </PageLayout>
    </>
  );
};




export default IndexPage;
