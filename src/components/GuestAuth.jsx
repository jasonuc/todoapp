import { BiUserCircle } from 'react-icons/bi'
import AuthButton from './AuthButton'
import { useNavigate } from 'react-router-dom'

function GuestAuth() {

    const navigate = useNavigate()

    const handleGuestAuth = () => {
        navigate('/home')
    }

    return (
        <AuthButton handleAuth={handleGuestAuth}>
            <BiUserCircle size={40} />
            Sign In As Guest
        </AuthButton>
    )
}

export default GuestAuth