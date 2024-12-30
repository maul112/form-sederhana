import InputForm from '../Input'
import Button from '../Button'

export default function FormLogin() {
    return (
        <form action="">
            <InputForm label='Username' type='text' name='username' placeholder='username...'></InputForm>
            <InputForm label='Password' type='password' name='password' placeholder='********'></InputForm>
            <Button color='bg-blue-500'>Login</Button>
        </form>
    )
}