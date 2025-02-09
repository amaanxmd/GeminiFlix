import Header from "./Header";
import LoginForm from "./LoginForm";
import LoginPageFooter from "./LoginPageFooter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = ()=>{
  const navigate = useNavigate()
    // useEffect(()=>{const unsubscribe =onAuthStateChanged(auth,(user)=>{if(user)navigate('/browse')});return unsubscribe},[])
    return (
      <div className="bg-black">

        <Header/>
        <LoginForm/>
        <LoginPageFooter/>
        
      </div>



    );
}

export default LoginPage;