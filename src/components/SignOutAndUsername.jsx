import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase/firebase"
import { useState } from "react"

function SignOutAndUsername() {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut(auth)
    navigate(-1)
  }

  onAuthStateChanged(auth, (user) => {
    if (user.isAnonymous) {
      console.log(user.uid)
      setName("Anonymous")
    } else if (user.isAnonymous === false) {
      setName(user.displayName)
    }
  })

  return (
    <div className='flex w-[100%] h-10 justify-between px-2 items-center text-third font-bold'>
      <button onClick={handleSignOut} className=" hover:text-secondary hover:border-secondary hover:border-b-2 px-1.5 transition-[border]">Sign out</button>
      <p className="">Hello, <span className="underline underline-offset-2 text-secondary">{name}</span></p>
    </div>
  )
}

export default SignOutAndUsername