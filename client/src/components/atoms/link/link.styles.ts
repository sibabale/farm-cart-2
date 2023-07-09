import styled from 'styled-components';

type AnchorProps = {
  color?: string
};

export const Anchor = styled.a<AnchorProps>`
  color: ${({color}) => color? color: 'black'};
  text-decoration: none;
`;