import React, {useState, createContext} from 'react';
import App from './App.jsx'

export const multiStepContext = createContext()

const StepContext = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    const submitData = () => {
        setCurrentStep(1)
        console.log(userData)
    }

    return (
        <div>
            <multiStepContext.Provider value={{
                currentStep, setCurrentStep,
                userData, setUserData,
                finalData, setFinalData,
                submitData
            }}>
                <App/>
            </multiStepContext.Provider>
        </div>
    );
};

export default StepContext;
