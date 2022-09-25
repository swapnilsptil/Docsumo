import React, {useState, createContext} from 'react';
import { authProvider } from './authProvider';

let AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  let signIn = (newUser, callback) => {
    return authProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return authProvider.signOut(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signIn, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;