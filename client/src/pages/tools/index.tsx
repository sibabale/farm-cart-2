import React from "react";
import "../../styles.global.css";

import { Filter } from "../../components/organisms/filter/filter";
import ProductCard from "../../components/organisms/product_card/product_card";
import { LeadCard } from "../../components/organisms/lead_card/lead_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import Sheep from '../../data/sheep.json';
import ToolsFilters  from "../../data/filters/tools.json";
import BestDeals from '../../data/best_deals.json';

import BonsmaraCattle from "../../assets/images/cows/bonsmara-lead.png";

const ToolsPage = () => {

  return (
    <PageLayout>
      <Filter items={ToolsFilters} />
      <LeadCard image={BonsmaraCattle} text="Animals" />
      <ProductLayout title="Today's Best Deals">
        {BestDeals.map((item, index) => (
            <ProductCard
              id={item.id}
              key={index}
              image={item.images[0]}
              title="Lorem"
              price={item.price}
              isLoading={true}
            />
          ))
        } 
      </ProductLayout>
    </PageLayout>
  );
};

export default ToolsPage;
