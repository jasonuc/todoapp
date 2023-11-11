import { useNavigate } from "react-router-dom"

function SignOutAndUsername() {
    const navigate = useNavigate()

    const handleSignOut = () => {
        navigate('/')
    }

  return (
    <div className='flex w-[100%] justify-between px-2 items-center text-navtext'>
        <button onClick={handleSignOut} className=" hover:text-secondary hover:border-secondary hover:border-b-2 px-1.5 border-navtext transition-[border]">Sign out</button>
        <p className="">Hello, <span className="underline underline-offset-2 text-secondary">Anonymous</span></p>
    </div>
  )
}

export default SignOutAndUsername