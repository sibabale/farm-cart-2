
import {
  WhatsappLink,
} from './empty_state.styles';

export default function EmptyState ({showLink = true, heading, subHeading}: {showLink?: boolean, heading?: string, subHeading?: string}) {

  return (
    <div className="h-fit w-fit my-0 mx-auto p-5 md:p-20 rounded border-2 border-dashed" >
      <h2 className="text-center text-xl text-gray-500">{heading}</h2>
      <h3 className='text-center text-gray-500'>{subHeading}</h3>
      
      {showLink && (
          <WhatsappLink href="https://wa.me/27813170529?text=Hi I would like to sell">
            <img src="../../images/icons/social/whatsapp.svg" alt="Whatsapp icon" />
            081 317 0529
          </WhatsappLink> 
        )
      }
    </div>
  );
}
