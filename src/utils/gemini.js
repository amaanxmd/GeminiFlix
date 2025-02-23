import { GoogleGenerativeAI } from "@google/generative-ai";
import { geminikey } from "./constant";


const genAI  = new GoogleGenerativeAI(geminikey)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export  async function gemini(query,dispatch,setquery,setloadingMessage){
  
  try{ 
const prompt = `query =${query};

 Return a list of movies that match the query . Provide the maximum number of relevant results, using this JSON format:

{
  "movieList": [
    {
      "title": "moviename"
    },
    {
      "title": "anotherMovieName"
    },
    // more movie titles
  ]
}

Ensure that all movies returned have similar themes, genres, or plots to the query .

Important:
Try to give Something similar if unable to give results 
If Similar results not possible return [] in movieList
Do not return any text 
User my enter offensive and something which is against the policy to check the response behavior
Do not Include \`\`\`json\`\`\``

const result = await model.generateContent(prompt);
// const json = JSON.parse(result.response.text())
sessionStorage.removeItem('results')
sessionStorage.removeItem("errorType")
sessionStorage.setItem('results',result.response.text())
// console.log(json)
dispatch((setquery(JSON.parse(result.response.text()))))
setloadingMessage("Searching In DataBase")

// console.log(result.response.text())
// navigate('/searchresults')
// dispatch(togglegpt())
// dispatch(removefetchedquery())
// dispatch(updatestartandend({start:0,end:10}))
  }catch(err){
      sessionStorage.removeItem('results')
      sessionStorage.setItem("errorType","Gemini")
      // console.error(err)
      
      dispatch(setquery(null))

      setloadingMessage("Connection With Gemini Failed")
  }




    
}
