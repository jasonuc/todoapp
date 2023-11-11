import { FcGoogle } from 'react-icons/fc'
import AuthButton from './AuthButton'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

function GoogleAuth() {

    const navigate = useNavigate()

    const handleGoogleAuth = async () => {
        await signInWithPopup(auth, provider)
        navigate('/home')
    }
    
    return (
        <AuthButton handleAuth={handleGoogleAuth}>
            <FcGoogle size={40} />
            Sign In With Google
        </AuthButton>
    )
}

export default GoogleAuth