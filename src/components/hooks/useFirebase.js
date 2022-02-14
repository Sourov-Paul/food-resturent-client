import { useState, useEffect } from "react";
import initializeFirebase from "./../Register-Login/Firebase/Firebase.init";
import {
  FacebookAuthProvider ,
  GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";

// initializeFirebase app
initializeFirebase();

const useFirebase = () => {
  // handle user
  const [user, setUser] = useState({});
  //    handle error
  const [error, setError] = useState("");
  // loading handle
  const [isLoading, setIsLoading] = useState(true);
  // admin handle 
  const [admin,setAdmin]=useState(false);

  // firebase user verify token
  const [token,setToken]=useState('')



  // Auth provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookAuthProvider= new FacebookAuthProvider()
  // registation handle
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError("");
        varifyEmail()
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email,password,name)
        //    send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //    signIn handle============
  const logInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Signin with google  popup
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user=result.user;

        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
        varifyEmail()
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // signin with facebook
  const signInWithFacebook=()=>{
    signInWithPopup(auth,facebookAuthProvider)
    .then(result=>{
      const { displayName, photoURL, email }=result.user;
      const loggedInUser={
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUser(loggedInUser)
   
    })
  }

  // save user database
  const saveUser=((email,password,displayName)=>{
    const user={email,password,displayName};
    fetch('https://stormy-gorge-03784.herokuapp.com//users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(()=>{})
    .catch((error) => {
      setError(error.message);
    })
  })



  // Verify Email
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then((result) => {
      // console.log(result)
    });
  };
  //    Sign out handle
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // admin handle
  useEffect(()=>{
    fetch(`https://stormy-gorge-03784.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])

  // all place logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken=>{
          setToken(idToken)
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  return {
    user,
    admin,
    saveUser,
    isLoading,
    error,
    token,
    registerUser,
    logOut,
    logInUser,
    signInWithGoogle,
    varifyEmail,
    signInWithFacebook,
  };
};
export default useFirebase;
