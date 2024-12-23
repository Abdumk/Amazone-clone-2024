import React , { useState,useContext } from 'react'

import { Link,useNavigate,useLocation } from 'react-router-dom';
import classes from './SignIn.module.css'
import { DataContext } from "../../../components/DataProvider/DataProvider";
import {Type} from '../../../Utility/Action.type' 
import { auth } from "../../../Utility/firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";



function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // N:B it show email and password found in our state
  console.log(password, email); 
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });
  const navigate = useNavigate();
  const navStateData = useLocation()
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  
  const authHandler = async (e) => {
    e.preventDefault();
     // tell us with same function but depened on user click it works when click signin log signin,when click signup log signup
    console.log(e.target.name);
    
    if (e.target.name === "signin") {
      // firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // show user info in console log so it approve data is found and register in firebase
          // console.log(userInfo);
          
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };



  return (
<section className={classes.login}>
{/* logo */}
<Link to={"/"}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      alt=""
    />
  </Link>

  {/* form */}

  <div className={classes.login__container} >
    <h1>Sign In</h1>
    {navStateData?.state?.msg && (
       <small style={
        {padding:'5px',
         textAlign:'center',
         color :'red',
         fontWeight :'bold'
        }
       } >
         {navStateData?.state?.msg}
       </small>
    )}
    <form action="">
      <div>
    <label htmlFor="email">Email</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
      </div>
      <div>
      <label htmlFor="password">password</label>
    <input   value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' />
      </div>
      <button    name="signin"  onClick={authHandler}  className={classes.login__signInButton}>
        {
          loading.signIn ? ( <ClipLoader color="#000" size={15}></ClipLoader>) :(  " Sign In")
        }
      </button>
    </form>
    {/* agreement */}
    <p>
      By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
      Sale. Please see our Privacy Notice, our Cookies Notice and our
      Interest-Based Ads Notice abd SPARTAW.
    </p>

    {/* create account btn */}
    <button 
    type='submit'
      name="signup"
       onClick={authHandler} 
      className={classes.login__registerButton}
    >
{loading.signUP ? (
        <ClipLoader color="#000" size={15}></ClipLoader>
      ) : (
        "Create your Amazon Account"
      )}


    </button>
       {error && (
      <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
    )}
  </div>


</section>
   
    
     



  )
}

export default Auth


