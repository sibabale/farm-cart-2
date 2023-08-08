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
      <h1 className="mb-5 md:mb-10 text-4xl md:text-7xl text-white">{text}</h1>
      <div className="mb-4">
        <Button 
          as="link"
          size="sm"
          to="/animals/goats"
          bg="rgba(255, 255, 255, 0.52)" 
          text="Shop Now" 
          color="white"
          isRound 
          borderColor="white"
        />
      </div>
    </LeadCardContent>
  </LeadCardContainer>
);

export default LeadCard;
