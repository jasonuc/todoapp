
function AuthButton({ children, handleAuth }) {

  return (
    <button onClick={handleAuth} className=" bg-plighter border-2 border-solid hover:border-secondary hover:bg-navtext hover:text-primary hover:text-xl h-14 w-[90%] md:w-[60%] shadow-md hover:shadow-xl rounded-md uppercase font-bold flex items-center justify-center gap-x-5 ">
        { children }
    </button>
  )
}

export default AuthButton