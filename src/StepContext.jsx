import React, {useState, createContext} from 'react';
import App from './App.jsx'

export const multiStepContext = createContext()

const StepContext = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    return (
        <div>
            <multiStepContext.Provider value={{
                currentStep, setCurrentStep,
                userData, setUserData,
                finalData, setFinalData
            }}>
                <App/>
            </multiStepContext.Provider>
        </div>
    );
};

export default StepContext;
