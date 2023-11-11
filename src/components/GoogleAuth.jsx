import { FcGoogle } from 'react-icons/fc'
import AuthButton from './AuthButton'

function GoogleAuth() {
    return (
        <AuthButton>
            <FcGoogle size={40} />
            Sign In With Google
        </AuthButton>
    )
}

export default GoogleAuth