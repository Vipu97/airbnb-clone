import {React,createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setUser(response.data);
        setReady(true);
      } catch (error) {
        // Handle authentication error or redirect to login page
        console.error('Authentication error:', error);
        setReady(true);
      }
    };
    if (!user) {
      fetchProfile();
    }
  }, [user]);
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}