import { useContext } from 'react'
import { FormContext } from '../Components/NewPatientModal'

export const useFormContext = () => {
  const formContext = useContext(FormContext)
  if (!formContext)
    throw new Error('No FormContext.Provider found when calling formContext.')
  return formContext
}
