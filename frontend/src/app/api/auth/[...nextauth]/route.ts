import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID ?? "",
            clientSecret:process.env.GOOGLE_SECRET ?? ""
        })
    ],
    session:{
        strategy:'jwt'
    },
    callbacks:{
        async jwt({token,user}){
            console.log(user)
            // user contains -> id,name,email,image
            if(user){
                const res = await fetch("http://localhost:5000/test")
                console.log(await res.json())
            }
            return token
        }
    }
})

export {handler as GET,handler as POST} 