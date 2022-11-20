import { useEffect, useState } from "react";

const useAdmin = (email) => {
    const[isAdmin,setIsAdmin] = useState(false)
    const[isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    if(email){
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
         setIsAdmin(data.isAdmin)
         setIsLoading(false)
        })
        .catch((err) => console.log(err));
    }
  }, [email]);
  return [isAdmin,isLoading];
};
export default useAdmin;