import React, { useRef } from 'react'
import { useEffect,useState} from 'react'
import { auth } from '../utils/firebase'
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth'
import { useNavigate ,useLocation } from 'react-router-dom'

const ResetPassword = () => {
    const password =useRef()
    const navigate =useNavigate()
    const hash = window.location.hash; // Get the full hash fragment
    const queryString = hash.includes("?") ? hash.split("?")[1] : ""; // Extract query part
    const urlParams = new URLSearchParams(queryString);
    const oobCode = urlParams.get("oobCode");


    const [showMessage,setshowMessage]=useState(false)
    const [error,seterror]=useState(null)
    
  
    useEffect(()=>{if(!oobCode){navigate("/")}},[])
    function handlePasswordChange(){
    const passwordresult = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password.current.value)
    if(passwordresult){
        verifyPasswordResetCode(auth,oobCode)
        .then(confirmPasswordReset(auth,oobCode,password.current.value)
               .then(()=>{setshowMessage(true);seterror(null)})
               .catch((e)=>{seterror({errortype:"passwordReset",errorMessage:e.message})})
             )
        .catch((e)=>{seterror({errortype:"verifyPasswordResetCode",errorMessage:e.message})})
    
       
    }else{
       seterror({errortype:"password",
           errorMessage:"Password should be minimum eight and maximum 10 characters, Should contain at least one uppercase letter, one lowercase letter, one number and one special character"
       })
    }
    }
  return (
    <div>

    <form className='absolute z-10 flex flex-col items-center gap-y-4 top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 w-full   sm:max-w-max bg-black/70 sm:w-[450px]  px-8 sm:px-[68px] py-[48px]  rounded-[4px]' onSubmit={(e)=>e.preventDefault()}>
        <input className='h-[56px] bg-inherit border border-gray-500/80 rounded px-[16px] caret-white text-white' ref={password} type='password' placeholder='Enter New password' />
        {(showMessage||error)&&<p className={`${showMessage?"text-white ":"text-red-600 text-sm"}`}>{showMessage?"Password changed successfully":error.errorMessage}</p>}
        <button className='bg-red-600  p-2 font-semibold text-white rounded' onClick={handlePasswordChange}>Reset Password</button>
        <button onClick={()=>navigate('/')} className='bg-red-600  p-2 font-semibold text-white rounded'>Go Back to Login Page</button>
    </form>
    <div className=" relative h-screen">
  <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg" alt="netflixBG" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>
    </div>
  )
}

export default ResetPassword