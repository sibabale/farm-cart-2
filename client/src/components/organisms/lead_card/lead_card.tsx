import React from "react";
import { Button } from "../../atoms/button/button";
import {LeadCardText,LeadCardContainer, LeadCardContent } from "./lead_card.styles";


type LeadCardProps = {
  text: string
  image: string
};

export const LeadCard = ({ image, text }: LeadCardProps ) => (
  <LeadCardContainer 
  
  $image={image} >
    <LeadCardContent>
      <LeadCardText>{text}</LeadCardText>
      <Button 
        as="link"
        to="/animals/goats"
        bg="rgba(255, 255, 255, 0.52)" 
        text="Shop Now" 
        color="white"
        isRound 
        borderColor="white"
      />
    </LeadCardContent>
  </LeadCardContainer>
);

export default LeadCard;
