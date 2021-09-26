import { useAuth0 } from '@auth0/auth0-react';

const SignOut = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Sign Out
    </button>
  );
};

export default SignOut;
