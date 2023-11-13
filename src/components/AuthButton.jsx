
function AuthButton({ children, handleAuth, hoverRotate }) {

  return (
    <button onClick={handleAuth} className={" bg-primary border-2 border-solid border-secondary h-14 w-[90%] md:w-[60%] shadow-md hover:shadow-xl rounded-md uppercase font-bold flex items-center justify-center gap-x-5 text-secondary transition-[rotate] duration-75 ease-in-out" + hoverRotate}>
      {children}
    </button>
  )
}

export default AuthButton