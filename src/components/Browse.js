import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useGetNowPlayingMovies } from "../customHooks/useGetNowPlayingMovies";
import {useDispatch, useSelector} from 'react-redux'
import { BrowseHeader } from "./BrowseHeader";
import { SecondaryContainer } from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import VideoContainerParent from "./VideoContainerParent";
import { togglegpt } from "../utils/gptslice";



const Browse =()=>{
    
    useGetNowPlayingMovies()
    const movies = useSelector((store)=>store.movieReducer.nowplayingmovies)
    const toggle = useSelector((store)=>store.gptReducer.toggle)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const uid = user.uid;
          
        


          
        } else {
          
          navigate("/")
          
        }
      });
    
     return unsubscribe;
    },[])

    function handleclick(){
        dispatch(togglegpt())
    }

    // if (!movies) return;
   

    return (<div className="bg-neutral-800 relative ">
       {toggle && <div className="w-full h-full absolute z-30" onClick={handleclick}>

        </div>}
       
        <BrowseHeader />
        
       
        <VideoContainerParent movie = {movies}/>

        <SecondaryContainer movie= {movies}/>

        { toggle && <GptSearch/>}
        
        
        
        </div>);
}

export default Browse;