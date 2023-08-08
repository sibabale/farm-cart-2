import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";

import {Card, Heading, PageContianer} from './index.styles';
const WhyPage = () => {


  return (
    <PageLayout>
      <Heading>why?</Heading>
      <PageContianer>
        <Card>
          <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
          <h4>Quality</h4>
          <p>From stud to commercial animals we sell only the best quality animals from reputable farms.</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1596633607590-7156877ef734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />
          <h4>Trust</h4>
          <p>Trusted sellers meet serious buyers. We hand pick all our sellers and buyers speak to sellers when they have purchased a product.</p>
        </Card>
        <Card>
          <img src="https://images.unsplash.com/photo-1598744412945-774afd3f2019?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1576&q=80" alt="" />
          <h4>Delivery</h4>
          <p>We deliver to your door step or farm gate everywhere within South Africa.</p>
        </Card>
      </PageContianer>
        
    </PageLayout>
  );
};

export default WhyPage;