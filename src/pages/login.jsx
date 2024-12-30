import AuthLayouts from '../components/layout/AuthLayouts'
import FormLogin from '../components/fragment/FormLogin'

export default function LoginPage() {
    return (
        <AuthLayouts title="Login">
            <FormLogin></FormLogin>
        </AuthLayouts>
    )
}