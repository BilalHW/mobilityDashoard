import {axiosTest} from '../api/user.api'
let data=[];
let articles=[];
async function getarticles(){
     data=await axiosTest()
    // console.log(data)
     data.map((e)=>(
        articles=e.response.docs
       
      ))
      console.log(articles)
      

}
export {getarticles };
