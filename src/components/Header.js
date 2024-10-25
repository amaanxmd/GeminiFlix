import Logo from "./Logo";
const Header =()=>{

    return (<div>
          <Logo className = {"absolute h-10  w-[148px] top-6 left-44 z-10"}/>
          <div className="relative  h-screen">
  <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg" alt="netflixBG" />
  <div className="absolute inset-0 bg-black opacity-50"></div>
</div>
          
    </div>)
}

export default Header;