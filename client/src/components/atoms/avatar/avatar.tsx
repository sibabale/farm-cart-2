import React from 'react'
import {AvatarImage, AvatarContainer} from "./avatar.styles"
import AvatarPlaceholder from "../../../assets/images/user.png"

type AvatarProps = {
  image?: string
  heading?: string
  subHeading?: string
}
export const Avatar = ({image, heading, subHeading}: AvatarProps) => {
  return(
    <AvatarContainer $hasHeadings={heading || subHeading ? true: false}>
      <AvatarImage src={image? image: AvatarPlaceholder} alt="avatar"/>  
      <div>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>
    </AvatarContainer>
  )
}

export default Avatar