import { useState } from 'react'

export const useForm = (initialStateForm = {}) => {
  const [formValues, setFormValues] = useState(initialStateForm)

  const reset = () => {
    setFormValues(initialStateForm)
  }

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return [formValues, handleInputChange, reset]
}
