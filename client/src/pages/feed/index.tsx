import "../../styles.global.css";

import { Filter } from "../../components/organisms/filter/filter";
import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import FeedFilters  from "../../data/filters/feed.json";
import BestDeals from '../../data/best_deals.json';

const FeedPage = () => {

  return (
    <PageLayout>
      <Filter items={FeedFilters} />
      <ProductLayout title="Today's Best Deals">
        {BestDeals.map((item, index) => (
            <ProductCard
              id={item.id}
              key={index}
              image={item.images[0]}
              title=""
              price={item.price}
              altText=""
              isLoading={true}
            />
          ))
        } 
      </ProductLayout>
    </PageLayout>
  );
};

export default FeedPage;
