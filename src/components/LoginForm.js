import { useState,useRef } from "react";
import { validate } from "../utils/validate";
import { createAccount,signIn,signInWithoutPassword } from "../utils/firebase";
import { useNavigate } from "react-router-dom";



const LoginForm = ()=>{
    const navigate = useNavigate()


    const email = useRef(null)
    const password = useRef(null)
    const [signedIn,setsignedIn]=useState(true)
    const [passwordfield,setpasswordfield]=useState(true)
    const [error, seterror]=useState(null)
    
    const handleClick = ()=>{
    const result =validate(email.current.value, passwordfield?password.current.value:undefined)
    seterror(result)
    
    
    // Authorization
    
    if (result ==null&&signedIn==false&&passwordfield==true){
        createAccount(email,password,seterror,navigate)
        

    }
    if(result ==null && signedIn==true && passwordfield== true){
        signIn(email,password,seterror,navigate)
        
    }
    if(result==null && passwordfield==false)
       signInWithoutPassword(email)
    }
   
return (<form onSubmit={(e)=>e.preventDefault()} className="absolute top-24 left-1/2 -translate-x-1/2  p-10  bg-black/70 w-[450px] h-[741px] px-[68px] py-[48] rounded-[4px]">

    
     
        <h1 className="text-[32px] font-bold text-white mb-[28px]">{signedIn? "Sign In":"Sign Up"} </h1>
        
        <div className="flex flex-col justify-between h-[315.2px]">  
        <input ref={email} className="h-[56px] bg-inherit border border-gray-500/80 rounded px-[16px] caret-white text-white" type="email" placeholder="Email or mobile number"/>
        {(error && error.errortype==="email")&& <p  className="text-red-700 font-light text-sm ">{error.errorMessage}</p>}
        {passwordfield &&<input ref={password} className="h-[56px] bg-inherit border border-gray-500/80 rounded px-[16px] caret-white text-white" type="password" placeholder="Password"/>}
        {(error && error.errortype==="password")&& <p className="text-red-700 font-light text-sm ">{error.errorMessage}</p>}
        {/* for showing firebase error */}
        {/* {error&&<p className="text-white">{error.errorMessage}</p>}  */}
        
        {!passwordfield &&<p className="text-white text-center text-xs text-gray-400 font-semibold ">Message and data rates may apply</p>}
        <button className="bg-red-600  h-[40px] font-semibold text-white rounded" onClick={handleClick}>  {passwordfield?signedIn? "Sign In":"Sign Up":"Send sign-in code"} </button>
        {signedIn && <p className="text-white/70 text-center">OR</p>}
        {signedIn && <button className=" h-[40px] bg-neutral-600/60 rounded font-semibold text-white" onClick={()=>{setpasswordfield(!passwordfield);seterror(null)}}>{passwordfield?"Use a sign-in code":"Use Password"} </button>}
        {signedIn && <p className="text-white text-center ">{passwordfield?"Forgot password?":"Forgot email or phone number?"}</p>}
        </div>
        <div className="flex mt-[20px] mb-[16px] items-center">
            <input className="h-[19px] w-[19px]" type="checkbox" defaultChecked/>
            <p className="text-white pl-[12px] font-normal">Remember me</p>
        </div>
        <div className="flex">
            <p className="text-neutral-400">{signedIn?"New to Netflix?":"Already have an account?"}</p>
            &nbsp;
            <p onClick={()=>{setsignedIn(!signedIn);setpasswordfield(true);seterror(null)}} className="text-white font-semibold">{signedIn?"Sign up now.":"Sign in now."}</p>
        </div>
        <p className="text-neutral-400 mt-[24px] text-[13px] text-left pr-[38.4px]  leading-snug ">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-600">Learn more.</span></p>

    


</form>)

}

export default  LoginForm; 