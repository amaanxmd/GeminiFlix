import { createHashRouter, RouterProvider,createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import LoginPage from "./LoginPage"
import { onAuthStateChanged } from "firebase/auth"
import { auth  } from "../utils/firebase"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { adduser, removeuser } from "../utils/slice"
import SearchResults from "./SearchResults"
import { BrowseHeader } from "./BrowseHeader"
import ResetPassword from "./ResetPassword"

const Body =()=>{
    const dispatch = useDispatch()
   

    const approuter = createBrowserRouter([

     {path:"/",
      element:<LoginPage/>

     },
     {
        path:"/browse",
        element :<Browse/>
     },
     {path:"/searchresults",
      element:<div className="w-full h-full bg-neutral-800"><BrowseHeader/> <SearchResults/></div>
     },{
        path:"/resetPassword",
        element:<ResetPassword/>
     },
    
    ])

    // useEffect(()=>{onAuthStateChanged(auth, (user) => {
    //     if (user) {
          
    //       const uid = user.uid;
    //       dispatch(adduser(uid))
    //       console.log(user)
         


          
    //     } else {
          
    //       dispatch(removeuser())
          
    //     }
    //   });},[])

return (<RouterProvider router={approuter}/>)


}


export default Body;