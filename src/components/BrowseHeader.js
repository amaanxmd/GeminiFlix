import { useDispatch, useSelector } from "react-redux"
import Logo from "./Logo"
import { togglegpt } from "../utils/gptslice"
import { useEffect,useState } from "react"
import { onAuthStateChanged, } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOutfromAccount } from "../utils/firebase"
import { unstable_batchedUpdates } from "react-dom"

export const BrowseHeader =()=>{
const navigate = useNavigate()
const toggleflag = useSelector((store)=>store.gptReducer.toggle)
const [navbarColor, setNavbarColor] = useState('bg-gradient-to-b from-black/80'); // Initial color
const [scrollTimeout, setScrollTimeout] = useState(null);
const [topBar,settopBar]=useState(false)
const dispatch = useDispatch()


const handleScroll = () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
        // console.log(scrollTimeout+"from inside function")
      }
    const scrollY = window.scrollY; // Get the vertical scroll position
    if (scrollY ) {
      setNavbarColor('bg-neutral-800'); // Color after scrolling (dark color)
    } 
   const timeout = setTimeout(()=>{setNavbarColor(`bg-gradient-to-b from-black/80`)},2000)
  //  console.log(timeout)
   setScrollTimeout(timeout)
  };

useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
   }, [scrollTimeout]);



  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      
    // console.log(user)


      
    } else {
      
      navigate("/")
      
    }
  });
return unsubscribe
 
},[])
function toggle(){
    dispatch(togglegpt())
    

}
function handleClick(){
  
signOutfromAccount(navigate)
  
}

    return (<div className={`fixed ${topBar?"bg-neutral-800":navbarColor} w-full sm:px-12 px-0 py-2 flex-wrap  z-30 flex justify-between items-center transition-colors ease-in-out duration-300`}>
       <Logo className={"h-12 w-40 ml-1.5  sm:-ml-1 "}/>
       {!toggleflag && <button className="text-white   sm:block hidden ml-auto sm:mr-4  bg-red-600 rounded  sm:p-1  hover:bg-red-600/80 " onClick={toggle} >Gpt-Search</button>}
       <button className="text-white   bg-red-600 sm:block hidden rounded  sm:p-1  hover:bg-red-600/80" onClick={handleClick}>Sign out</button>
       <button onClick={()=>settopBar(!topBar)} className={`sm:hidden mr-3 ${topBar?"text-2xl ":"text-4xl pb-3"} text-white  ` }>{topBar?'\u2715':'\u2261'}</button>
       <div className={`max-h-0 overflow-hidden bg-neutral-800 w-full transition-all ease-in-out duration-300 ${topBar?'max-h-[110px]':''}`}>

       <div className={`w-full sm:hidden flex bg-neutral-800 flex-col items-start relative   `}>
        <div onClick ={()=>{navigate('/browse')}} className="text-white text-lg font-semibold sm:hidden pl-3 py-1 border-b w-full text-start">Home</div>
        <button className="text-white text-lg    sm:hidden border-b w-full pl-3 py-1 font-semibold text-start" onClick={handleClick}>Sign out</button>
        <button  className="text-white text-lg sm:hidden   w-full text-start pl-3 py-1 font-semibold " onClick={()=>{toggle();settopBar(false)}} >Gpt-Search</button>
       </div>
       </div>

    </div>)
}

// old h-12 w-24
