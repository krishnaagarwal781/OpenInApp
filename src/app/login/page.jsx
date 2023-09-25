"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'


const Login = () => {
    const session = useSession();
    console.log(session);
    if(session.status === "loading"){
        return <p>loading</p>
    }
    if(session.status === "authenticated"){
        return <button onClick={()=>signOut("google")}>Logout</button>
    }
    // if(session.status === "unauthenticated"){
    //     return <p>Hacker h bhai hacker hai</p>
    // }
  return (
    <div>
        <button className='bg-black text-white fixed top-10 left-10 ' onClick={()=>signIn("google")}>Login With Google</button>
    </div>
  )
}

export default Login