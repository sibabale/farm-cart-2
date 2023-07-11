

import { NavLink } from 'react-router-dom';
import { Input } from '../../components/atoms/input/input';
import {
  Title,
  AuthForm, 
  RightSection,
  AuthContianer,
  LeftSectionRegister,
  Links
} from './auth.styles';
import { Button } from '../../components/atoms/button/button';
const RegistrationPage = () => {

  const handleLogin = () => {

  };

  return (
      <AuthContianer>
        <RightSection>
          <Title>
            <NavLink to="/">
                farm cart
            </NavLink>
          </Title>
        <AuthForm onSubmit={() => handleLogin()}>
          <h2>Register</h2>
          <Input type='email' required placeholder='Email' />
          <Input type='password' required placeholder='Password' />
          <Button 
            bg='black' 
            type='submit'
            text="Register" 
            color='white' 
            isRound 
          />
          <NavLink to="/auth/login">
              Login
          </NavLink>
        </AuthForm>
        </RightSection>
        <LeftSectionRegister></LeftSectionRegister>
      </AuthContianer>
  );
};

export default RegistrationPage;
