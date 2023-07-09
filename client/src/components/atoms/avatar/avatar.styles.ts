import styled from 'styled-components';

export const AvatarContainer = styled.div<{$hasHeadings: boolean}>`
  display: flex;

  p {
      color: gray;
      margin-top: 5px;
    }

  ${({$hasHeadings}) => $hasHeadings ? ` 
      img {
        margin-right: 30px;
      }` : ''
  }
`

export const AvatarImage = styled.img`
  width: 30px;
  height: 30px;
  padding: 10px;
  border-radius: 100%;
  background-color: #D9D9D9;
`;