const LoginPageFooter =()=>{
    return (<div className=" sm:h-[269.8px] sm:mx-[150px] sm:mt-[290px]  bg-black sm:border-none border-t-2 border-white pt-4 px-8 pb-4 sm:p-0">

        <div className="text-neutral-400 pb-[24px] ">Questions? Call 000-800-919-1694</div>
       <ul className="flex flex-wrap gap-y-7">
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm  ">FAQ</li>
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm " >Help Center</li>
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm ">Terms of Use</li>
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm ">Privacy</li>
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm ">Cookie Preferences</li>
        <li className="text-neutral-400 flex w-1/2 sm:w-1/3 text-sm ">Corporate Information</li>
       </ul>
       <button className="text-white mt-[24px] px-[34px] py-[6px] border border-neutral-700 rounded">English</button>
      </div>)
}

export default LoginPageFooter;