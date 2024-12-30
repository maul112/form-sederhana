import Input from "./Input"
import Label from "./Label"

export default function InputForm({label, type, name, placeholder}) {
    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input type={type} id={name} name={name} placeholder={placeholder}></Input>
        </div>
    )
}