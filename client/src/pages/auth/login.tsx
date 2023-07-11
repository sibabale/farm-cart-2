

import { NavLink } from 'react-router-dom';
import { Input } from '../../components/atoms/input/input';
import {
  Title,
  Links,
  AuthForm, 
  RightSection,
  AuthContianer,
  LeftSectionLogin,
} from './auth.styles';
import { Button } from '../../components/atoms/button/button';

const LoginPage = () => {

  const handleRegistertion = () => {

  };

  return (
      <AuthContianer>
        <RightSection>
          <Title>
            <NavLink to="/">
                farm cart
            </NavLink>
          </Title>
        <AuthForm onSubmit={() => handleRegistertion()}>
          <h2>Login</h2>
          <Input type='email' required placeholder='Email' />
          <Input type='password' required placeholder='Password' />
          <Button 
            bg='black' 
            type="submit" 
            text="Login" 
            color='white' 
            isRound 
          />
          <Links>
            <NavLink to="/auth/register">
                Register
            </NavLink>
            <NavLink to="/">
                Forgot password?
            </NavLink>
          </Links>
        </AuthForm>
        </RightSection>
        <LeftSectionLogin></LeftSectionLogin>
      </AuthContianer>
  );
};

export default LoginPage;
