import { useEffect, useState } from "react";

const useToken = (email) => {
    const[userToken,setUserToken] = useState("")
  useEffect(() => {
    if(email){
        console.log(email)
        fetch(`https://doctors-portal-server-omega-olive.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
         if(data.token){
            console.log('token',data.token)
            localStorage.setItem("doc_port_token", data.token);
            setUserToken(data.token)
         }
        })
        .catch((err) => console.log(err));
    }
  }, [email]);
  return userToken;
};
export default useToken;
