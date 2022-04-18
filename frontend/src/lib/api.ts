export const BASE_URL = 'http://localhost:3001'

export interface Patient {
  age: number
  name: string
  procedure: string
  language: string
  gender: 'Male' | 'Female'
  imgSrc?: 'string'
  _id: 'string'
}

export type Form = Omit<Patient, '_id'>

export const getLanguages = async (): Promise<string[]> =>
  fetch(`${BASE_URL}/meta/lang`).then((res) => res.json())

export const getFormTemplate = async (): Promise<Form> =>
  fetch(`${BASE_URL}/meta/form-template`).then((res) => res.json())

export const getPatients = async (): Promise<Patient[]> =>
  fetch(`${BASE_URL}/patients`).then((res) => res.json())

export const getPatient = async (id: number): Promise<Patient> =>
  fetch(`${BASE_URL}/patients/${id}`).then((res) => res.json())

export const createPatient = async (patient: Form): Promise<Patient> =>
  fetch(`${BASE_URL}/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patient),
  })
    .then((res) => {
      if (!res.ok) {
        return res.text().then((text) => {
          throw Error(text)
        })
      }
      return res.json()
    })
    .catch((err) => {
      throw Error(err)
    })

export const updatePatient = async (
  patient: Patient,
  id: string
): Promise<Patient> =>
  fetch(`${BASE_URL}/patients/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patient),
  }).then((res) => res.json())

export const deletePatient = async (id: string): Promise<Patient> =>
  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json())
