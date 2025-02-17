import { useState,useRef,useEffect } from "react";
import { validate } from "../utils/validate";
import { createAccount,signIn,signInWithoutPassword,resetPassword,checkIfLinkValid } from "../utils/firebase";
import { useNavigate } from "react-router-dom";



const LoginForm = ()=>{
    const navigate = useNavigate()


    const [forgotPassword,setforgotPassword]=useState(false)
    const email = useRef(null)
    const password = useRef(null)
    const [signedIn,setsignedIn]=useState(true)
    const [passwordfield,setpasswordfield]=useState(true)
    const [error, seterror]=useState(null)
    const [linkSentSuccessfully,setlinksentSuccessfully]=useState("Message and data rates may apply")
    const [showToUseVpn,setshowToUseVpn]=useState(true)
    
    const hash = window.location.hash; // Get the full hash fragment
    const queryString = hash.includes("?") ? hash.split("?")[1] : ""; // Extract query part
    const urlParams = new URLSearchParams(queryString);
    const paramsObject = Object.fromEntries(urlParams.entries());
    const mode = paramsObject.mode
  
    
    useEffect(()=>{if(mode==="resetPassword"){navigate("/resetPassword",{state:{params:paramsObject}})}else{checkIfLinkValid(navigate,seterror)} },[])
     
    
    
    

    const handleClick = ()=>{
        
    const result =validate(email.current.value, password.current?.value,passwordfield)
    seterror(result)
    
    // Authorization
    
    if (result ==null&&signedIn==false&&passwordfield==true){
        createAccount(email,password,seterror,navigate)
        

    }
    if(result ==null && signedIn==true && passwordfield== true){
        signIn(email,password,seterror,navigate)
        
    }
    if(result==null && passwordfield==false && !forgotPassword){

        signInWithoutPassword(email,seterror,setlinksentSuccessfully)
    }
    if(result==null && passwordfield==false &&forgotPassword){
        resetPassword(email,setlinksentSuccessfully,seterror)
    }
    }
   
return (<form onSubmit={(e)=>e.preventDefault()} className="absolute top-0 sm:top-24 left-1/2 -translate-x-1/2 w-full h-screen  sm:max-w-max bg-black/70 sm:w-[450px] sm:h-full px-4 sm:px-[68px] py-36 pb-0 sm:py-[48px] sm:pb-0 rounded-[4px]">
    <div className={`${showToUseVpn?"noclip top-16 left-0 sm:top-0":"clip top-7 left-[calc((100%/2)-110px)] sm:top-2  animate-bounce"} transition-all duration-200 absolute   sm:left-0 bg-red-600 `}>
    <h1 className={`${showToUseVpn?"text-white  text-sm   pl-4 pr-6 sm:px-8":"opacity-0 text-sm text-white pl-4 pr-6 sm:px-8"}`}>Due to the api used in this project not being available in india, users are requested to use a VPN </h1>
      <p onClick={()=>setshowToUseVpn(false)} className="absolute top-0 right-2 text-white leading-tight">{'\u2715'}</p>
      <p className={`${showToUseVpn?"hidden":"absolute top-5 -translate-y-1/2 -translate-x-1/2 left-5 text-white after:h-6 after:w-6  after:absolute after:left-0 after:top-0 after:-translate-x-1/2   "}  `} onClick={()=>setshowToUseVpn(true)}> i</p>
    </div>

<h1 className="text-[32px]  font-bold text-white mb-[28px]">{forgotPassword?"Reset  Password": signedIn ? "Sign In" : "Sign Up"}</h1>

<div className="flex flex-col justify-between h-[315.2px]">
    <input ref={email} className="h-[56px] bg-inherit border border-gray-500/80 rounded px-[16px] caret-white text-white" type="email" placeholder="Email or mobile number"/>
    {(error && (error.errortype === "email"||error.errortype==="emailAndPassword"||error.errortype==="signUp"||error.errortype==="signIn"||error.errortype==="sendSignInLink"||error.errortype==="resetPassword"||error.errortype==="signInWithEmailLink")) && <p className="text-red-700 font-light text-xs sm:text-sm">{error.errorMessage[0]}</p>}
    { passwordfield && <input ref={password} className="h-[56px] bg-inherit border border-gray-500/80 rounded px-[16px] caret-white text-white" type="password" placeholder="Password"/>}
    {error &&(error.errortype==="password"||error.errortype==="emailAndPassword")&& <p className="text-red-700 font-light text-xs sm:text-sm">{error.errorMessage[1]}</p>}
    {/* {(error && error.errortype === "password") && <p className="text-red-700 font-light text-sm">{error.errorMessage}</p>} */}
    
    {!passwordfield && <p className="text-white text-center text-xs  font-semibold">{linkSentSuccessfully}</p>}
    <button className="bg-red-600 h-[40px] font-semibold text-white rounded" onClick={handleClick}>{passwordfield ?signedIn?"Sign In" : "Sign Up":forgotPassword?"Send Password Reset Mail":"Send sign-in code" }</button>
    {signedIn && <p className="text-white/70 text-center">OR</p>}
    {signedIn && <button className="h-[40px] bg-neutral-600/60 rounded font-semibold text-white" onClick={()=>{setpasswordfield(!passwordfield); seterror(null);setforgotPassword(false);setlinksentSuccessfully("Message and data rates may apply")}}>{passwordfield ? "Use a sign-in code" : "Use Password"}</button>}
    {signedIn && <p onClick={()=>{seterror(null);setforgotPassword(true);setpasswordfield(!passwordfield);setlinksentSuccessfully('')}}  className="text-white text-center">{ !forgotPassword&& passwordfield  ? "Forgot password?" :""}</p>}
</div>

{/* <div className="flex mt-[20px] mb-[16px] items-center">
    <input className="h-[19px] w-[19px]" type="checkbox" defaultChecked/>
    <p className="text-white pl-[12px] font-normal">Remember me</p>
</div> */}

<div className="flex mt-4">
    <p className="text-neutral-400">{signedIn ? "New to Netflix?" : "Already have an account?"}</p>&nbsp;
    <p onClick={()=>{setsignedIn(!signedIn); setpasswordfield(true); seterror(null);setforgotPassword(false)}} className="text-white font-semibold">{signedIn ? "Sign up now." : "Sign in now."}</p>
</div>

<p className="text-neutral-400 mt-[24px] text-[13px] text-left sm:pr-[38.4px] leading-snug ">
    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600">Learn more.</span>
</p>

</form>
)

}

export default  LoginForm; 