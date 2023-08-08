import {useState} from 'react';
import { Button } from "../../atoms/button/button";
import {
  Price, 
  BankingDetails,
  ProductCTAContainer
} from "./product_cta.styles"

export interface IProductCTAProps {
  price: number,
}

export default function ProductCTA ({price}: IProductCTAProps) {

  const [isCheckingOut, setIsCheckingOut] = useState(false)
  return (
    // height: fit-content;
    // border: 2px solid lightgray;
    // border-radius: 10px;
    // flex-direction: column;
    // justify-content: space-around;
    <div 
      className="hidden p-4 h-fit sm:flex flex-col rounded border-2 border-gray justify-around"
    >
      <Price>R {price}</Price>
      <Button 
        bg="black"
        text={isCheckingOut ? 'Hide Bank Details' : "Checkout"}
        color="white"
        isRound
        onClick={() => setIsCheckingOut(!isCheckingOut)}
        /> 
      {
        isCheckingOut && (
          <>
            
            <BankingDetails className="mt-4">
              <p><b>Bank:</b> Capitec Bank</p>
              <p><b>Branch Code:</b> 470010</p>
              <p><b>Account Number:</b> 1512 9916 25</p>
              <p><b>Reference Number:</b> Your 10 digit cell number <small>(eg. 081 000 0000)</small></p>
            </BankingDetails>
            <small>
              <b>
                <u>NB:</u> Make your payment to the above account and keep your
                  proof of payment safe.
                  Once you funds reflect we will contact you to make arrangements.
              </b>
            </small>
          </>
        )
      }
    </div>
  );
}
