const authProvider = {
    isAuthenticated: false,
    signIn(callback) {
      authProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signOut(callback) {
      authProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  };
  
  export { authProvider };