import arcadeIcon from "../assets/images/icon-arcade.svg"
import advanceIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

const availablePlans = {
    arcade: {
        monthly: 9,
        yearly: 90
    },
    advanced: {
        monthly: 12,
        yearly: 120
    },
    pro: {
        monthly: 15,
        yearly: 150
    }
}
import { useState } from "react"

const SelectPlan = ({ formData, setFormData, setCurrentStep, addOnsPrices }) => {

    const [selectedPlan, setSelectedPlan] = useState(formData.step2 ? formData.step2.plan : null)
    const [isChecked, setIsChecked] = useState(formData.step2 && formData.step2.duration === "yearly")


    const handleToggle = () => {
        setIsChecked(!isChecked);

    };

    const handleSubmit = () => {
        const price = getPrice()
        setFormData(prevData => ({
            ...prevData,
            step2: {
                plan: selectedPlan,
                duration: isChecked ? "yearly" : "monthly",
                price: price
            }
        }))

        if (formData.step3) {
            const updatedStep3 = formData.step3.map(item => ({
                ...item,
                price: addOnsPrices.find(addOn => addOn.name === item.name)[isChecked ? "yearly" : "monthly"]
            }))
            setFormData(prevData => ({
                ...prevData,
                step3: updatedStep3
            }))
        }

        setCurrentStep(3)
    }

    const getPrice = () => {
        if (selectedPlan && isChecked) {
            return availablePlans[selectedPlan].yearly
        } else if (selectedPlan && !isChecked) {
            return availablePlans[selectedPlan].monthly
        }

        return 0
    }
    return (
        <div className="w-10/12 md:w-full py-4 px-12 absolute md:static bg-white shadow-2xl md:shadow-none rounded-lg top-28 mx-auto ">
            <h1 className="text-3xl font-semibold ">Select Plan</h1>
            <p className="text-gray-400 py-2 text-sm">You have the option of monthly or yearly billing</p>

            <div className="pt-8 flex flex-col md:flex-row justify-center gap-3">
                <button
                    className={`text-left p-4 w-full md:w-2/6 border flex gap-3 items-center md:items-start md:flex-col font-medium rounded-lg ${selectedPlan === "arcade" ? "border-marine-blue bg-magnolia" : "border-gray-300"}`}
                    onClick={() => setSelectedPlan("arcade")}
                >
                    <img src={arcadeIcon} alt="arcade icon" className="pb-6 " />
                    <div>
                        <p className="text-sm">Arcade</p>
                        <p className="text-sm text-gray-400">
                            {isChecked ? "$90/yr" : "$9/mo"}
                        </p>
                        {isChecked && <p className="text-xs">2 months free</p>}
                    </div>

                </button>

                <button
                    className={`text-left p-4 w-full md:w-2/6 font-medium border flex md:flex-col items-center md:items-start gap-3  rounded-lg ${selectedPlan === "advanced" ? "border-marine-blue bg-magnolia" : "border-gray-300"}`}
                    onClick={() => setSelectedPlan("advanced")}
                >
                    <img src={advanceIcon} alt="advanced icon" className="pb-6 " />
                    <div>
                        <p className="text-sm">Advanced</p>
                        <p className="text-sm text-gray-400">
                            {isChecked ? "$120/yr" : "$12/mo"}
                        </p>
                        {isChecked && <p className="text-xs">2 months free</p>}
                    </div>
                </button>
                <button
                    className={`text-left p-4 w-full md:w-2/6 border flex md:flex-col items-center md:items-start gap-3 font-medium rounded-lg ${selectedPlan === "pro" ? "border-marine-blue bg-magnolia" : "border-gray-300"}`}
                    onClick={() => setSelectedPlan("pro")}
                >
                    <img src={proIcon} alt="arcade icon" className="pb-6 " />
                    <div>
                        <p className="text-sm">Pro</p>
                        <p className="text-sm text-gray-400">
                            {isChecked ? "$150/yr" : "$15/mo"}
                        </p>
                        {isChecked && <p className="text-xs">2 months free</p>}
                    </div>
                </button>

            </div>

            <div className="w-full flex justify-center items-center gap-3 mt-8 bg-magnolia">
                <p className={`font-semibold text-sm transition duration-300 ${isChecked ? "text-gray-400" : ""}`}>Monthly</p>
                <div className="w-12 h-7 rounded-full bg-marine-blue cursor-pointer relative p-3" onClick={handleToggle}>
                    <input type="checkbox" className="sr-only  z-50" />
                    <div className={`w-5 h-5 rounded-full bg-gray-200 absolute top-1 left-1 transition duration-300 ${isChecked ? "translate-x-full" : "translate-x-0"}`}></div>
                </div>
                <p className={`font-semibold text-sm transition duration-300 ${isChecked ? "text-black" : "text-gray-400"}`}>Yearly</p>
            </div>

            <div className="w-full flex justify-between pt-12">
                <button className="text-sm px-4 py-2 text-gray-400 hover:text-black" onClick={() => setCurrentStep(1)}>Go Back</button>
                <button className="text-sm px-4 py-2 bg-marine-blue rounded-md text-white" disabled={!selectedPlan} onClick={handleSubmit}>Next Step</button>
            </div>
        </div>
    )
}

export default SelectPlan