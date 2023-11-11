import { FcGoogle } from 'react-icons/fc'
import AuthButton from './AuthButton'
import { useNavigate } from 'react-router-dom'

function GoogleAuth() {

    const navigate = useNavigate()

    const handleGoogleAuth = () => {
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