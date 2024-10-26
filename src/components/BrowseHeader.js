import { useDispatch, useSelector } from "react-redux"
import Logo from "./Logo"
import { togglegpt } from "../utils/gptslice"
import { useEffect,useState } from "react"
import { onAuthStateChanged, } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { signOutfromAccount } from "../utils/firebase"

export const BrowseHeader =()=>{
  const navigate = useNavigate()
const toggleflag = useSelector((store)=>store.gptReducer.toggle)
const [navbarColor, setNavbarColor] = useState('bg-gradient-to-b from-black/80'); // Initial color
const [scrollTimeout, setScrollTimeout] = useState(null);
const dispatch = useDispatch()
const handleScroll = () => {
    // if (scrollTimeout) {
    //     clearTimeout(scrollTimeout);
    //   }
    const scrollY = window.scrollY; // Get the vertical scroll position
    if (scrollY ) {
      setNavbarColor('bg-neutral-800'); // Color after scrolling (dark color)
    } 
   const timeout = setTimeout(()=>{setNavbarColor('bg-gradient-to-b from-black/80')},500)
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
    onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      
    console.log(user)


      
    } else {
      
      navigate("/")
      
    }
  });

 
},[])
function toggle(){
    dispatch(togglegpt())
    

}
function handleClick(){
  
signOutfromAccount(navigate)
  
}

    return (<div className={`fixed ${navbarColor} w-full px-12 py-2 z-20 flex justify-between items-center transition-colors ease-in-out duration-300`}>
       <Logo className={"h-12 w-24 "}/>
       {!toggleflag && <button className="text-white ml-auto mr-4 bg-red-600 rounded p-1 hover:bg-red-600/80" onClick={toggle} >Gpt-Search</button>}
       <button className="text-white p-1 bg-red-600 rounded-md hover:bg-red-600/80" onClick={handleClick}>Signout</button>

    </div>)
}