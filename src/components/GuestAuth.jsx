import { BiUserCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import AuthButton from './AuthButton'
import { signInAnonymously } from "firebase/auth"
import { auth } from "../firebase/firebase"

function GuestAuth() {

    const navigate = useNavigate()

    const handleGuestAuth = async () => {
        try {
            await signInAnonymously(auth)
            navigate('/home')
        } catch ({ code, message }) {
            alert(`${code}\n${message}`)
        }
    }

    return (
        <AuthButton handleAuth={handleGuestAuth}>
            <BiUserCircle size={40} />
            Sign In As Guest
        </AuthButton>
    )
}

export default GuestAuth