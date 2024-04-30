import thanksLogo from "../assets/images/icon-thank-you.svg"

const Thanks = () => {
    return (
        <div className="w-10/12 md:w-full h-96 md:h-full flex flex-col justify-center items-center py-4 px-12 absolute md:static bg-white shadow-2xl md:shadow-none rounded-lg top-28 mx-auto text-center">
            <img src={thanksLogo} alt="thanks logo" className="pb-6" />
            <h1 className="font-semibold text-2xl pb-2">Thank You</h1>
            <p className="text-cool-gray">Thanks for confirming and and your subscribtion! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default Thanks