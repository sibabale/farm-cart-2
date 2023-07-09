import "../../../styles.global.css";

import { PageLayout } from "../../../components/organisms/layouts/page_layout/page_layout";
import { ListingsContainer } from "./index.styles";

import { Button } from "../../../components/atoms/button/button";

const IndexPage = () => {
  return (
    <PageLayout>
      <ListingsContainer>
        <div className="lead-text">
          <h1>It's easy to get <br />  started on <b>farm cart</b></h1>
        </div>

        <div className="steps">
          <div className="step">
              <div className="content">
                <h4>1. Tell us about your product</h4>
                <p>Share basic info, like what it is, how much it weighs, what breed or brand is it.</p>
              </div>
              <img src="../images/products.svg" alt="cow and wheat corn" />
          </div>
          <div className="step">
            <div className="content">
                <h4>2. Make it stand out</h4>
                <p>Add good quality images.</p>
            </div>
            <img src="../images/transform-product.svg" alt="magic wand waved on a tiller" />

          </div>
          <div className="step">
            <div className="content">
              <h4>3. Finish up and publish</h4>
              <p>Let people know how much your product cost and where they can get you.</p>
            </div>
            <img src="../images/publishing.svg" alt="plane origami" />
          </div>
          <div className="step">

          <Button 
            bg="black" 
            as="link" 
            to="/listing/step-1" 
            text="Get Started" 
            isRound={true} 
            color="white" 
          />
          </div>

        </div>

      </ListingsContainer>
    </PageLayout>
  );
};

export default IndexPage;
