import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
         
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Istifadeci adini daxil edin" },
                password: { label: "Password", type: "password",placeholder:"Sifreni daxil edin" }
              },
async  authorize(credentials,req){
    const user={id:"1",name:"aydan", password:"123"}
    if(
        credentials?.username===user.name && 
        credentials?.password===user.password
    ){
        return user
    }else{
        return null
    }
}
        })
    ],
}