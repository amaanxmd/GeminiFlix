import Header from "./Header";
import LoginForm from "./LoginForm";
import LoginPageFooter from "./LoginPageFooter";

const LoginPage = ()=>{

    return (
      <div className="bg-black">

        <Header/>
        <LoginForm/>
        <LoginPageFooter/>
        
      </div>



    );
}

export default LoginPage;