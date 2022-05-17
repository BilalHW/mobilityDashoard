import axios from "./axios";

const ARTICLES_URL = "/articles?page=0";
const data = [];
const accessToken = JSON.parse(sessionStorage.getItem("token"));
export async function signin(creditionals) {
  await axios.post("./auth/signin", creditionals).then((res) => {
    const token = res?.data?.accessToken;
    localStorage.setItem("token", token);
    localStorage.getItem("token");
  });
}

export async function axiosTest() {
  await axios
    .get(ARTICLES_URL, {
      headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`},
    })
    .then((res,data) => {
      data =  res.data
       console.log(data);
    });
  return data;
}
export async function signout(){
  localStorage.removeItem("token")
}
export{data}
