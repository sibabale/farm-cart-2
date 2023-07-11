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
    <ProductCTAContainer>
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
            <small>
              <b>
                <u>NB:</u> Make your payment to the following account and keep your
                  Reference Number safe.
                  Once you funds reflect the seller will contact you to make arrangements.
              </b>
            </small>
            <BankingDetails>
              <p><b>Bank:</b> Absa</p>
              <p><b>Branch Code:</b> 0000</p>
              <p><b>Account Number:</b> 0000 000 000 000</p>
              <p><b>Reference Number:</b> 00000 0000 0000</p>
            </BankingDetails>
          </>
        )
      }
    </ProductCTAContainer>
  );
}
