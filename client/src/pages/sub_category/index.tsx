import { useParams} from "react-router-dom";
import { useEffect,useState} from "react";

import EmptyState from "../../components/atoms/empty_state/empty_state";
import ProductCard from "../../components/organisms/product_card/product_card";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";
import { ProductLayout } from "../../components/organisms/layouts/product_layout/product_layout";

import { useAppSelector } from '../../hooks/redux';
import { selectAllProducts} from '../../redux/products/all/all.product.selector';



const SubCategoryPage = () => {
  const {sub_category} = useParams();
  const [data, setData] = useState<any[]>([]);

  const products = useAppSelector(selectAllProducts);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const selectedCategory = products.filter((item:any ) => {
      return item.sub_category === sub_category
    })
    
    setData(selectedCategory)
    setIsLoading(false) 
  }, [])

  return (
    <PageLayout>
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
      {
        data.length === 0 && (
          <EmptyState 
            heading="Sorry we don’t have this product at the moment"
            subHeading="If you have it available for sale, contact us below."
          />
        )
      }
        
    </PageLayout>
  );
};

export default SubCategoryPage;
