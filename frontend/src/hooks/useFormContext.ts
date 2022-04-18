import { useContext } from 'react'
import { FormContext } from '../Components/NewPatientModal'

// This hook handles edge cases where this component is rendered without a value from its context provider.
// Bound to happen only where it is tested in isolation, not in production env.
export const useFormContext = () => {
  const formContext = useContext(FormContext)
  if (!formContext)
    throw new Error('No FormContext.Provider found when calling formContext.')
  return formContext
}
