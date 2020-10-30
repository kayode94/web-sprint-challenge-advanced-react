// write your custom hook here to control your checkout form

import {useState} from 'react'

const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = () =>{
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [values, setValues] = useState(initialValues)

    const handleChanges = (event) =>{
        setValues({...values, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setShowSuccessMessage(true)
    }
    return[values, showSuccessMessage, handleSubmit, handleChanges]
}