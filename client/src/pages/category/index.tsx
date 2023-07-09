import { useParams } from "react-router-dom";
import "../../styles.global.css";

import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import Sheep from '../../data/sheep.json';

const IndexPage = () => {
  let { id } = useParams();
  return (
    <PageLayout>
      <ProductLayout title={`${id?.charAt(0).toUpperCase()}${id?.slice(1)}`  }>
        {Sheep.map((item, index) => (
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

export default IndexPage;
