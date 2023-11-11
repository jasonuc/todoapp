import GoogleAuth from "../components/GoogleAuth"
import GuestAuth from "../components/GuestAuth"

function Login() {
  return (
    <div className=" w-[90%] md:w-[50%] min-h-72 border-solid md:border-2 flex flex-col items-center gap-5 py-7 bg-plighter rounded-md shadow-lg mt-10 border-2 border-secondary border-opacity-50">
        <h2 className="text-4xl font-bold">- Sign In -</h2>
        <GuestAuth />
        {/* <GoogleAuth /> */}
    </div>
  )
}

export default Login