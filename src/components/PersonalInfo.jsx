import { useState } from "react"
import validator from "validator"

const PersonalInfo = ({ formData, setFormData, setCurrentStep }) => {

    const [name, setName] = useState(formData.step1 ? formData.step1.name : "")
    const [email, setEmail] = useState(formData.step1 ? formData.step1.email : "")
    const [phone, setPhone] = useState(formData.step1 ? formData.step1.phone : "")

    const [errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        const error = validateForm()

        if (Object.keys(error).length === 0) {
            setFormData(prevValue => ({
                ...prevValue,
                step1: {
                    name: name,
                    email: email,
                    phone: phone
                }
            }))
            setCurrentStep(2)
        }
    }

    const validateForm = () => {
        const error = {}
        if (validator.isEmpty(name)) {
            error.name = "This field is required"
        }

        if (validator.isEmpty(email)) {
            error.email = "This field is required"
        } else if (!validator.isEmail(email)) {
            error.email = "Email format is not correct"
        }

        if (validator.isEmpty(phone)) {
            error.phone = "This field is required"
        } else if (!validator.isMobilePhone(phone)) {
            error.phone = "Please enter correct phone number"
        }

        setErrors(error)
        return error
    }

    return (
        <div className="w-10/12 md:w-full py-4 px-12 absolute md:static bg-white shadow-2xl md:shadow-none rounded-lg top-28 mx-auto ">
            <h1 className="text-3xl font-semibold ">Personal Info</h1>
            <p className="text-gray-400 py-2 text-sm">Please provide your name, email address and phone number</p>
            <form noValidate className="w-full">
                <div className="pb-6 w-full">
                    <div className="flex justify-between w-full items-end">
                        <p className="text-sm">Name</p>
                        {errors.name && <p className="text-xs font-semibold text-red-600">{errors.name}</p>}
                    </div>
                    <input type="text" name="name" id="name" className={`rounded-md px-3 py-1 border border-gray-400 focus:outline-none focus:border-marine-blue w-full ${errors.name ? "border-red-600" : ""}`} placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="pb-6 w-full">
                    <div className="flex justify-between w-full items-end">
                        <p className="text-sm">Email Addres</p>
                        {errors.email && <p className="text-xs font-semibold text-red-600">{errors.email}</p>}
                    </div>
                    <input type="email" name="email" id="email" className={`rounded-md px-3 py-1 border border-gray-400 focus:outline-none focus:border-marine-blue w-full ${errors.email ? "border-red-600" : ""}`} placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="pb-10 w-full">
                    <div className="flex justify-between w-full items-end">
                        <p className="text-sm">Phone Number</p>
                        {errors.phone && <p className="text-xs font-semibold text-red-600">{errors.phone}</p>}
                    </div>
                    <input type="text" name="phone" id="phone" className={`rounded-md px-3 py-1 border border-gray-400 focus:outline-none focus:border-marine-blue w-full ${errors.phone ? "border-red-600" : ""}`} placeholder="e.g. +1 234 567 890" onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ''))} value={phone} maxLength={14} />
                </div>
                <div className="w-full flex justify-end">
                    <button type="submit" className="bg-marine-blue text-white px-3 py-1 rounded-md" onClick={handleSubmit}>Next Step</button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo