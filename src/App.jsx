import { useState } from 'react'
import './App.css'
import Sidebar from "./components/Sidebar"
import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'
import Summary from './components/Summary'
import Thanks from './components/Thanks'

const addOnsPrices = [
  {
    name: "online",
    monthly: 1,
    yearly: 10
  },
  {
    name: "storage",
    monthly: 2,
    yearly: 20
  },
  {
    name: "profile",
    monthly: 2,
    yearly: 20
  }
]
function App() {

  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    step1: null,
    step2: null,
    step3: []
  })

  return (
    <div className='w-full h-screen flex justify-center md:items-center bg-magnolia font-ubuntu'>
      <div className='w-[700px] h-[500px] bg-white md:p-4 rounded-md flex flex-col md:flex-row relative'>
        <Sidebar
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          formData={formData}
        />
        <div className="w-full flex justify-center">
          {currentStep === 1 && (
            <PersonalInfo formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />
          )}

          {currentStep === 2 && (
            <SelectPlan formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} addOnsPrices={addOnsPrices} />
          )}

          {currentStep === 3 && (
            <AddOns planDuration={formData.step2 && formData.step2.duration} setFormData={setFormData} addOnsPrices={addOnsPrices} setCurrentStep={setCurrentStep} formData={formData} />
          )}

          {currentStep === 4 && (
            <Summary formData={formData} setCurrentStep={setCurrentStep} />
          )}

          {currentStep === 5 && (
            <Thanks />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
