import { useAuth0 } from '@auth0/auth0-react';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primary btn-block" onClick={() => loginWithRedirect()}>
      Sign In
    </button>
  );
};

export default SignIn;
