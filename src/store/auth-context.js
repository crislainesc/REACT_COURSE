import React, { useCallback, useEffect, useState } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
   token: '',
   isLoggedIn: false,
   login: (token) => { },
   logout: () => { }
});

const calculateRemainingTime = (expirationTime) => {
   const currentTime = new Date().getTime();
   const adjExpirationTime = new Date(expirationTime).getTime();

   const remainingDuration = currentTime - adjExpirationTime;

   return remainingDuration;
}

const retrieveStoredToken = () => {
   const storedToken = localStorage.getItem('token')
   const storedExpirationTime = localStorage.getItem('expirationTIme');

   const remaingTime = calculateRemainingTime(storedExpirationTime);

   if (remaingTime <= 3600) {
      localStorage.removeItem('token')
      localStorage.removeItem('expirationTIme');

      return null
   }

   return {
      token: storedToken,
      duration: remaingTime
   };
}

export const AuthContextProvider = (props) => {

   const tokenData = retrieveStoredToken();

   let inititalToken;

   if (tokenData.token) {
      inititalToken = tokenData.token;
   }

   const [token, setToken] = useState(inititalToken);

   const userIsLoggedIn = !!token;

   const logoutHandler = useCallback(() => {
      setToken(null);
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');

      if (logoutTimer) {
         clearTimeout(logoutTimer);
      }
   }, [])

   const loginHandler = (token, expirationTime) => {
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('expirationTime', expirationTime);

      const remainingTime = calculateRemainingTime(expirationTime);

      logoutTimer = setTimeout(logoutHandler, remainingTime);
   }

   useEffect(() => {
      if (tokenData) {
         console.log(tokenData.duration)
         logoutTimer = setTimeout(logoutHandler, tokenData.duration);
      }
   }, [tokenData, logoutHandler])


   const contextValue = {
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler
   }

   return (
      <AuthContext.Provider value={contextValue}>
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContext;