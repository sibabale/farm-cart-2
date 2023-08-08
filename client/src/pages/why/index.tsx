import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";

import {Card, Heading} from './index.styles';
const WhyPage = () => {

  return (
    <PageLayout >
      <Heading>why?</Heading>
      <div className="sm:px-10 md:px-0 flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="w-80 mb-10 md:mb-0 md:pr-5">
          <img 
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="3 calves in pasture" 
            className="w-80 h-60 rounded-md object-cover"
          />
          <h4 className="my-4 font-bold">Quality</h4>
          <p>From stud to commercial animals we sell only the best quality animals from reputable farms.</p>
        </div>
        <div className="w-80 mb-10 md:mb-0 md:px-5">
          <img 
            src="https://images.unsplash.com/photo-1596633607590-7156877ef734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="handshake with an orange background" 
            className="w-80 h-60 rounded-md object-cover"
          />
          <h4 className="my-4 font-bold">Trust</h4>
          <p>Trusted sellers meet serious buyers. We hand pick all our sellers and buyers speak to sellers when they have purchased a product.</p>
        </div>
        <div className="w-80 mb-10 md:mb-0 md:pl-5">
          <img 
            src="https://images.unsplash.com/photo-1598744412945-774afd3f2019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1576&q=80" 
            alt="A car pulling a trailer with livestock"
            className="w-80 h-60 rounded-md"
          />
          <h4 className="my-4 font-bold">Delivery</h4>
          <p>We deliver to your door step or farm gate everywhere within South Africa.</p>
        </div>
      </div>
        
    </PageLayout>
  );
};

export default WhyPage;
