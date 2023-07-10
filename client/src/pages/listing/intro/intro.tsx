
import { ListingsContainer } from "./index.styles";


import { Button } from "../../../components/atoms/button/button";
import { useDispatch } from "react-redux";
import {stepForward} from '../../../redux/forms/listing/steps/steps.slice';

const IndexPage = () => {

  const dispatch = useDispatch();

  return (
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
        <div>
          <Button 
            bg="black" 
            text="Get Started" 
            color="white" 
            isRound={true} 
            onClick={() => dispatch(stepForward())}
          />
        </div>

      </div>

    </ListingsContainer>
  );
};

export default IndexPage;
