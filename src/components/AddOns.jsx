import { useState } from "react"

const AddOns = ({ planDuration, setFormData, addOnsPrices, setCurrentStep, formData }) => {

    const [selectedAddOns, setSelectedAddOns] = useState(formData.step3 || [])

    const handleToggle = (addOn) => {
        const foundAddOns = selectedAddOns.find(addOnName => addOnName.name === addOn)
        // cari object dengan nama addOn yang sama
        const addOnPrice = addOnsPrices.find(addOnItem => addOnItem.name === addOn)
        if (foundAddOns) {
            const updatedAddOns = selectedAddOns.filter(addOnItem => addOnItem.name !== addOn)
            setSelectedAddOns(updatedAddOns)
            setFormData(prevData => ({
                ...prevData,
                step3: updatedAddOns
            }))
        } else {
            const updatedAddOns = [...selectedAddOns, { name: addOn, price: addOnPrice[planDuration] }]
            setSelectedAddOns(updatedAddOns)
            setFormData(prevData => ({
                ...prevData,
                step3: updatedAddOns
            }))
        }
    }

    return (
        <div className="w-10/12 md:w-full py-4 px-12 absolute md:static bg-white shadow-2xl md:shadow-none rounded-lg top-28 mx-auto">
            <h1 className="text-3xl font-semibold ">Pick add-ons</h1>
            <p className="text-gray-400 py-2 text-sm">Add-ons help enhance your gaming experience</p>
            <div className="w-full flex flex-col gap-5 pt-8">
                <div className={`flex items-center px-5 py-3 border justify-between rounded-lg cursor-pointer ${formData.step3 && formData.step3.some(data => data.name === "online") ? "border-marine-blue bg-magnolia" : "border-gray-300"}`} onClick={() => handleToggle("online")}>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' onChange={() => handleToggle("online")} checked={formData.step3 && formData.step3.some(data => data.name === "online")} />
                        <div>
                            <p className="font-medium">Online Services</p>
                            <p className="text-xs text-gray-400">Access to multiplayer games</p>
                        </div>
                    </div>
                    <p className="text-purplish-blue text-sm">
                        {planDuration === "monthly" ? "+$1/mo" : "+$10/yr"}
                    </p>
                </div>
                <div className={`flex items-center px-5 py-3 border justify-between rounded-lg cursor-pointer ${formData.step3 && formData.step3.some(data => data.name === "storage") ? "border-marine-blue bg-magnolia" : "border-gray-300"}`} onClick={() => handleToggle("storage")}>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' onChange={() => handleToggle("storage")} checked={formData.step3 && formData.step3.some(data => data.name === "storage")} />
                        <div>
                            <p className="font-medium">Larger Storage</p>
                            <p className="text-xs text-gray-400">Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <p className="text-purplish-blue text-sm">
                        {planDuration === "monthly" ? "+$2/mo" : "+$20/yr"}
                    </p>
                </div>
                <div className={`flex items-center px-5 py-3 border justify-between rounded-lg cursor-pointer ${formData.step3 && formData.step3.some(data => data.name === "profile") ? "border-marine-blue bg-magnolia" : "border-gray-300"}`} onClick={() => handleToggle("profile")}>
                    <div className="flex gap-3 items-center">
                        <input type="checkbox" name="" id="" className='w-5 h-5 cursor-pointer' onChange={() => handleToggle("profile")} checked={formData.step3 && formData.step3.some(data => data.name === "profile")} />
                        <div>
                            <p className="font-medium">Customizable Profile</p>
                            <p className="text-xs text-gray-400">Custome theme on your profile</p>
                        </div>
                    </div>
                    <p className="text-purplish-blue text-sm">
                        {planDuration === "monthly" ? "+$2/mo" : "+$20/yr"}
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-between pt-12">
                <button className="text-sm px-4 py-2 text-gray-400 hover:text-black" onClick={() => setCurrentStep(2)}>Go Back</button>
                <button className="text-sm px-4 py-2 bg-marine-blue rounded-md text-white" onClick={() => setCurrentStep(4)}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns