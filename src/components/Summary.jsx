import { useEffect, useState } from "react"

const Summary = ({ formData, setCurrentStep }) => {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (formData.step3 || formData.step3.length > 0) {
            setTotalPrice(formData.step2.price + formData.step3.reduce((total, currentItem) => total + currentItem.price, 0))
        } else {
            setTotalPrice(formData.step2.price)
        }
    }, [formData])

    return (
        <div className="w-10/12 md:w-full py-4 px-12 absolute md:static bg-white shadow-2xl md:shadow-none rounded-lg top-28 mx-auto">
            <h1 className="text-3xl font-semibold ">Finishing Up</h1>
            <p className="text-gray-400 py-2 text-sm pb-12">Double-check everything looks OK before confirming</p>

            <div className="p-3 rounded-lg bg-magnolia">
                <div className="w-full flex justify-between items-center pb-2">
                    <div>
                        <p className="font-semibold">{formData.step2.plan} ({formData.step2.duration})</p>
                        <button className="text-cool-gray underline" onClick={() => setCurrentStep(2)}>Change</button>
                    </div>
                    <p className="font-semibold">${formData.step2.price}/{formData.step2.duration === "monthly" ? "mo" : "yr"}</p>
                </div>
                <div className="w-full h-[2px] bg-light-gray rounded-full"></div>

                {formData.step3 && formData.step3.map(data => (
                    <div className="w-full flex justify-between items-center pt-2 text-sm" key={data.name}>
                        <p className="text-cool-gray font-medium">{data.name} Service</p>
                        <p className="font-medium">${data.price}/{formData.step3.duration === "monthly" ? "mo" : "yr"}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between px-3 pt-3">
                <p className="text-sm text-cool-gray">total per {formData.step2.duration === "monthly" ? "month" : "year"}</p>
                <p className="text-lg text-purplish-blue font-medium">${totalPrice}/{formData.step2.duration === "monthly" ? "mo" : "yr"}</p>
            </div>

            <div className="w-full flex justify-between pt-20">
                <button className="text-sm px-4 py-2 text-gray-400 hover:text-black" onClick={() => setCurrentStep(3)}>Go Back</button>
                <button className="text-sm px-4 py-2 bg-purplish-blue rounded-md text-white" onClick={() => setCurrentStep(5)}>Confirm</button>
            </div>
        </div>
    )
}

export default Summary