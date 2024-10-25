export const validate = (email, password)=>{

const emailresult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

if(!emailresult){
    return { errortype:"email",
              errorMessage:"Invalid Email"

         }
}
if(password){
const passwordresult = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)
if(!passwordresult){
    return {errortype:"password",
        errorMessage:" Password should be minimum eight and maximum 10 characters, Should contain at least one uppercase letter, one lowercase letter, one number and one special character"

    }
}
}
// return emailresult ?(passwordresult?'email and password is correct':"email correct password wrong"):passwordresult?"email wrong password correct":"email pass both wrong"


return null
}