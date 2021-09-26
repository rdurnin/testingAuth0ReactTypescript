import { useAuth0, withAuth0 } from "@auth0/auth0-react";

import SignIn from "./SignIn";
import SignOut from "./SignOut";

const AuthButton = () => {
    const { isAuthenticated } = useAuth0();

    return isAuthenticated ? <SignOut /> : <SignIn />;
};

export default withAuth0(AuthButton);