

const Sidebar = ({ currentStep, setCurrentStep, formData }) => {
    return (
        <div className={`w-full md:w-[260px] h-[180px] md:h-full bg-[url(/background/bg-sidebar-mobile.svg)] md:bg-[url(/background/bg-sidebar-desktop.svg)] rounded-m bg-cover md:bg-cover bg-no-repeat  md:p-4 flex justify-center md:justify-start gap-6 md:gap-0 md:flex-col rounded-lg`}>
            <div className='flex items-center pb-3 gap-2'>
                <button
                    className={`border border-white rounded-full py-1 px-3 text-white ${currentStep === 1 ? "bg-pastel-blue text-gray-700" : ""}`}
                    onClick={() => setCurrentStep(1)}
                    disabled={currentStep === 5}
                >
                    1
                </button>
                <div className='hidden md:block'>
                    <small className='text-white'>STEP 1</small>
                    <p className='text-white font-semibold text-sm'>YOUR INFO</p>
                </div>
            </div>
            <div className='flex items-center pb-3 gap-2'>
                <button
                    className={`border border-white rounded-full py-1 px-3 text-white ${currentStep === 2 ? "bg-pastel-blue text-gray-700" : ""}`}
                    onClick={() => setCurrentStep(2)}
                    disabled={!formData.step1 || currentStep === 5}
                >
                    2
                </button>
                <div className='hidden md:block'>
                    <small className='text-white'>STEP 2</small>
                    <p className='text-white font-semibold text-sm'>SELECT PLAN</p>
                </div>
            </div>
            <div className='flex items-center pb-3 gap-2'>
                <button
                    className={`border border-white rounded-full py-1 px-3 text-white ${currentStep === 3 ? "bg-pastel-blue text-gray-700" : ""}`}
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.step1 || !formData.step2 || currentStep === 5}
                >
                    3
                </button>
                <div className='hidden md:block'>
                    <small className='text-white'>STEP 3</small>
                    <p className='text-white font-semibold text-sm'>ADD-ONS</p>
                </div>
            </div>
            <div className='flex items-center pb-3 gap-2'>
                <button
                    className={`border border-white rounded-full py-1 px-3 text-white ${currentStep === 4 || currentStep === 5 ? "bg-pastel-blue text-gray-700" : ""}`}
                    onClick={() => setCurrentStep(4)}
                    disabled={currentStep === 5 || !formData.step1 || !formData.step2}
                >
                    4
                </button>
                <div className='hidden md:block'>
                    <small className='text-white'>STEP 4</small>
                    <p className='text-white font-semibold text-sm'>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar