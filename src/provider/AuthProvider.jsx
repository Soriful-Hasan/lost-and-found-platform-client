import { useEffect, useState } from "react";
import UserContext from "./AuthContext";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(loading);

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const userSignOut = () => {
    return signOut(auth);
  };
  const updateUserProfile = (currentUser, userData) => {
    return updateProfile(auth.currentUser, userData);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, [auth]);
  console.log(loading);
  const authInfo = {
    signUpUser,
    signInUser,
    userSignOut,
    updateUserProfile,
    user,
    loading,
    signInWithGoogle,
    setUser,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthProvider;
