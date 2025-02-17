export const validate = (email, password,passwordField)=>{

const emailresult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
if(passwordField){
    const passwordresult = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)

if(!emailresult&&!passwordresult){
    return { errortype:"emailAndPassword",
              errorMessage:["Invalid Email","Password should be minimum eight and maximum 10 characters, Should contain at least one uppercase letter, one lowercase letter, one number and one special character"]
            }

}
if(!emailresult){
    return{errortype:"email",
           errorMessage:["Invalid Email"]
    }
}


if(!passwordresult &&passwordField){
    return {errortype:"password",
        errorMessage:[''," Password should be minimum eight and maximum 10 characters, Should contain at least one uppercase letter, one lowercase letter, one number and one special character"]

    }
}
}else{
    if(!emailresult){
        return{errortype:"email",
               errorMessage:["Invalid Email"]
        }
    }
}
// const emailresult = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

// if(!emailresult){
//     return { errortype:"email",
//               errorMessage:"Invalid Email"

//          }
// }
// if(passwordField){
// const passwordresult = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)
// if(!passwordresult){
//     return {errortype:"password",
//         errorMessage:" Password should be minimum eight and maximum 10 characters, Should contain at least one uppercase letter, one lowercase letter, one number and one special character"

//     }
// }
// }



return null
}