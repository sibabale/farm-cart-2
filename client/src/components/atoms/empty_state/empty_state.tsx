
import {
  WhatsappLink,
  EmptyStateContainer
} from './empty_state.styles';



export default function EmptyState () {


  return (
    <EmptyStateContainer >
      <h2>Sorry we don’t have this product at the moment</h2>
      <h3>If you have it available for sale, contact us below</h3>
      <WhatsappLink href="https://wa.me/27813170529?text=Hi I would like to sell">
        
        <img src="../../images/icons/social/whatsapp.svg" alt="Whatsapp icon" />
        081 317 0529</WhatsappLink>
    </EmptyStateContainer>
  );
}
