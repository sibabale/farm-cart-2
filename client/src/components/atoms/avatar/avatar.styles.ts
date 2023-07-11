import { url } from 'inspector';
import styled from 'styled-components';

export const AvatarContainer = styled.div<{$hasHeadings: boolean}>`
  display: flex;

  p {
      color: gray;
      margin-top: 5px;
    }

  ${({$hasHeadings}) => $hasHeadings ? ` 
      div {
        margin-right: 30px;
      }` : ''
  }
`

export const AvatarImage = styled.div<{$bg: string}>`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: #D9D9D9;
  background-size: cover;
  background-position: center;
  background-image: ${({$bg}) => $bg ? `url(${$bg})`: ''};
`;