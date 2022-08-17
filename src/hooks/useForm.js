import { useState } from "react";

function useForm(initialState = {}) {
    const [inputValues, setInputValues] = useState(initialState)
    const resetForm = () => {
        setInputValues(initialState);
    }
    const setForm = (newInputValues) => {
        setInputValues(newInputValues);
    }
    const handleInputChange = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    }
    // const handleInputChange = (e) => {
    //    setInputValues((prev) => ({...prev, [e.target.name]: e.target.value}));
    // }
    return {
        inputValues,
        handleInputChange,
        resetForm,
        setForm,
    }
}

export default useForm;