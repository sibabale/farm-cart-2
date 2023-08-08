
import ProductCard from "../../components/organisms/product_card/product_card"
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import animals from '../../data/animals.json';

const AnimalsPage = () => {

  const data = animals;
  return (
    <PageLayout>
      {
        data.length > 0 && (
          <ProductLayout title="Animals">
            {data?.map((item, index) => {
              const {images} = item;
                            
              return (
                <ProductCard
                  id={`${item.main_category}/${item.sub_category}/${item._id}`}
                  key={index}
                  image={images ? images[0] : ''}
                  video={item.video}
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
  );
};




export default AnimalsPage;
