import styled from 'styled-components';

export const AuthContianer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Links = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  a {
    color: #000000;
    outline: none;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  font-weight: bold;

  a {
    color: #000000;
    outline: none;
    text-decoration: none;
  }
`;

export const AuthForm = styled.form`
  display: flex;
  margin-top: 200px;
  align-items: center;

  a {
    color: #000000;
    outline: none;
    text-decoration: none;
  }

  h2 {
    width: 60%;
    margin-bottom: 50px;
  };

  button, input {
    width: 60%;
    margin-bottom: 50px
  }
  flex-direction: column;

  `;

export const RightSection = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  padding-top: 10px;
  padding-left: 40px;
  flex-direction: column;
`;

export const LeftSectionLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-size: cover;
  background-image: url('../images/cows/nguni-calf.png');
  `

export const LeftSectionRegister = styled.div`
  width: 50%;
  height: 100vh;
  background-size: cover;
  background-image: url('../images/cows/dairy-calves.png');
  `