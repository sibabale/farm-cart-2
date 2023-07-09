import styled from 'styled-components';

type UploaderProps = {
  $bg: string | null
};

type LabelProps = {
  $selected: boolean
};

export const Uploader = styled.div<UploaderProps>`
  input {
    display:none;
  }
  ${
    ({$bg}) => $bg && `background-image: url(${$bg});` 
  };
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Label = styled.label<LabelProps>`
  height: 100%;
  display: flex;
  opacity: ${({ $selected }) => $selected ? '0' : '1' };
  align-items: center;
  justify-content: center;
`;