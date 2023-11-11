import { BiUserCircle } from 'react-icons/bi'
import AuthButton from './AuthButton'

function GuestAuth() {
    return (
        <AuthButton>
            <BiUserCircle size={40} />
            Sign In As Guest
        </AuthButton>
    )
}

export default GuestAuth