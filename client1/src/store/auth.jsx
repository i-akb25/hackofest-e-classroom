import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
//context
export const AuthContext = createContext();
//provider-> responsible for providing the data(context) to its descendents.
export const AuthProvider=({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(""); //creating for authentication(filling up contact form or about)
    // useEffect(() => {
    //     const storedToken = localStorage.getItem("token");
    //     if (storedToken !== token) {
    //       setToken(storedToken);
    //     }
    //   }, []);
    
    const storeTokenInLS=(serverToken)=>{
        setToken(serverToken); //ensures to show logout btn on navbar affter logging in
        return localStorage.setItem("token",serverToken);
    };

    //for toggling register+login or logout in navbar 
    let isloggedIn  = !!token;
    console.log("logged", isloggedIn);
    //tackling the logout functionality
    const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

  //JWT Authentication- to get currently logged in Userdata for contact and about 
     const useAuthentication=async()=>{
        try {
           const response= await fetch("http://localhost:5000/api/auth/user",{
            method:"GET",
            headers:{
              Authorization: `Bearer ${token}`,  
            },
           });
           if(response.ok){
            const data= await response.json();
            console.log("user data", data.userData); // data is the response but userData contains all data data of user(created in middleware ).....so data is an object(from frontend) containing userdata
            setUser(data.userData); //now user will get updated(in useState)
           }
           
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      useAuthentication();
    },[]);

    return (
        <AuthContext.Provider value={{isloggedIn, storeTokenInLS, LogoutUser, user}}>
            {children}
        </AuthContext.Provider>
    );
};

//consumer
//creating custom Hook-> useAuth -> this function now contains the value provided by the AuthContext.Provider higher up in the component tree.
export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);//here, useContext is a consumer
    if(!authContextValue) //means if we have not provided authProvider in main.jsx
    {
        throw new Error("useAuth used outside of Provider");
    }

    return authContextValue; 
};

