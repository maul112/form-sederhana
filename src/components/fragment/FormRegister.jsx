import InputForm from '../Input'
import Button from '../Button'

export default function FormRegister() {
    return (
        <form action="">
            <InputForm label='Fullname' type='text' name='fullname' placeholder='Fullname...'></InputForm>
            <InputForm label='Username' type='text' name='username' placeholder='username...'></InputForm>
            <InputForm label='Password' type='password' name='password' placeholder='********'></InputForm>
            <Button color='bg-blue-500'>Register</Button>
        </form>
    )
}