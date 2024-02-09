// AuthContext.jsx

import { createContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";

export const Context = createContext();

export function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Context.Provider value={{ user, setUser }}>
      {!loading && children}
    </Context.Provider>
  );
}
