import styled from "styled-components";

import  Link  from "../../atoms/link/link";

export const ProductCardContainer = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: none;
`;

export const Video = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
