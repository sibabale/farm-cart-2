
import {
  WhatsappLink,
  EmptyStateContainer
} from './empty_state.styles';



export default function EmptyState ({showLink = true, heading, subHeading}: {showLink?: boolean, heading?: string, subHeading?: string}) {


  return (
    <EmptyStateContainer >
      <h2>{heading}</h2>
      <h3>{subHeading}</h3>
      
      {showLink && (
          <WhatsappLink href="https://wa.me/27813170529?text=Hi I would like to sell">
            <img src="../../images/icons/social/whatsapp.svg" alt="Whatsapp icon" />
            081 317 0529
          </WhatsappLink> 
        )
      }
    </EmptyStateContainer>
  );
}
