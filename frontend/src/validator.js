export default function validator(formData, autocompleteRef) {
  const { name, age, procedure, gender } = formData
  if (name && age && procedure && gender && autocompleteRef.current.value) {
    return true
  } else return false
}
