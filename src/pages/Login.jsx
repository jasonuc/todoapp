import GoogleAuth from "../components/GoogleAuth"
import GuestAuth from "../components/GuestAuth"

function Login() {
  return (
    <div className=" w-[90%] md:w-[50%] h-72 flex flex-col justify-center items-center gap-5 py-7 bg-plighter rounded-lg shadow-lg mt-10 text-white">
        <h2 className="text-4xl font-bold">- Sign In -</h2>
        <GuestAuth />
        <GoogleAuth />
    </div>
  )
}

export default Login